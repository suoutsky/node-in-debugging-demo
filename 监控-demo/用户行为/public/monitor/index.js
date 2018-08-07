/*
  @author: Seven Lju
  @date: 2016-03-18

  DOM Event Monitor by Overriding
    EventTarget.prototype.addEventListener
  with global object identifier feature via defining
    Object.prototype.__oid__
 */
var $petal;
var eventTaskList = [];
if(!$petal) $petal = {};

(function ($petal) {

(function() {
    var _id = 1;
    // 定义对象__oid_w__
    Object.defineProperty(Object.prototype, "__oid_w__", {
      writable: true
    });
    // 定义对象 __oid_
    Object.defineProperty(Object.prototype, "__oid__", {
      get: function() {
        if (!this.__oid_w__)
          this.__oid_w__ = _id++;
        return this.__oid_w__;
      },
    });
})();

var original_addEventListener = EventTarget.prototype.addEventListener;
var map_listener = {
  config: {
    count: true
  }
};

// addEventListener('click', click, false)
function new_addEventListener(type, listener, options) {
  return original_addEventListener.call(
    this,
    type,
    wrapper(this, listener, type, map_listener), // newlistener 
    options
  );
}

function mapid(obj, listener) {
  return obj.__oid__ + '_' + listener.__oid__;
}
// 处理事件列表
function eventTask(fn, evt) {
  if (eventTaskList.length > 10) {
    eventTask.shift();
  }
  eventTaskList.push({
    event: fn,
    evt: evt
  });
  console.log(eventTaskList);
}
function wrapper(target, listener, type, __map__) {
  var __id__ = mapid(target, listener);
  var __item__ = __map__[__id__];
  if (!__item__) {
    __item__ = {};
    __map__[__id__] = __item__;
  }
  __item__.count = 0;
  __item__.type = type;
  return function (evt) {
    if (__item__.callback) __item__.callback(evt);
    if (__map__.config.count) __item__.count ++;
    listener(evt);
    eventTask(listener, event);
  };
}

function switch_off() {
  EventTarget.prototype.addEventListener = original_addEventListener;
  // TODO registered wrapper(listener)=>listener
}

function switch_on() {
  EventTarget.prototype.addEventListener = new_addEventListener;
  // TODO registered listener=>wrapper(listener)
}

$petal.evtmonitor = {
  config: function () {
    return map_listener.config;
  },
  count: function (target, listener) {
    var item = map_listener[mapid(target, listener)];
    if (!item) return -1;
    return item.count;
  },
  type: function (target, listener) {
    var item = map_listener[mapid(target, listener)];
    if (!item) return null;
    return item.type;
  },
  addCleanEventListener: function (target, type, listener, options) {
    return original_addEventListener.call(
      target,
      type,
      listener,
      options
    );
  },
  switchOn: switch_on,
  switchOff: switch_off
};

})($petal);
