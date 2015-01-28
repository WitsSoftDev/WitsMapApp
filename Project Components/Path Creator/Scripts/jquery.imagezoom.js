/**
 * jQuery Plugin to zoom images on Mobile device and/or Desktop
 * Requires Hammer.js library for Mobile
 * https://github.com/EightMedia/hammer.js
 * 
 * Requires mousewheel plugin for Desktop
 * https://github.com/brandonaaron/jquery-mousewheel
 * 
 * @author bummzack
 */
(function($) {
	var methods = {
		init : function($$options){
			// build main options before element iteration
			var $settings = $.extend( {}, $.fn.imageZoom.defaults, $$options);
			// iterate and handle each matched element
			return this.each(function() {
				var $this = $(this);
				$this.data("settings", $settings);
				$this.data("originalStyles", $this.attr("style"));
				$this.data("hasImageZoom", true);
				$this.wrap($($settings.wrapper).addClass($settings.wrapperClass));
				var wrapper = $this.parents("." + $settings.wrapperClass);
				
				var wi = $this.outerWidth(), 
					he = $this.outerHeight(),
					scale = 1,
					prevScale = 1,
					offset,
					lastEvent = null,
					origin = {x: 0, y: 0},
					vendorPrefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-", "-khtml-"];
				
				// copy local styles to the wrapper
				wrapper.css({
					position: "relative",
					display: "block",
					overflow: "hidden",
					width: wi,
					height: he,
					marginTop: $this.css("marginTop"),
					marginBottom: $this.css("marginBottom"),
					marginLeft: $this.css("marginLeft"),
					marginRight: $this.css("marginRight"),
					"float": $this.css("float"),
					"clear": $this.css("clear")
				});
				
				// override local styles
				$this.css({
					position: "absolute",
					left: 0,
					top: 0,
					marginTop: 0,
					marginBottom: 0,
					marginLeft: 0,
					marginRight: 0
				});
				
				var bindMobile = function(){
					wrapper.hammer($settings.hammerSettings);
					
					wrapper.bind("transformstart", function(event){
						if(event && event.gesture){
							// We save the initial midpoint of the first two touches to
							// say where our transform origin is.
							var x1 = event.gesture.touches[0].screenX || 0;
							var x2 = event.gesture.touches[1].screenX || 0;
							var y1 = event.gesture.touches[0].screenY || 0;
							var y2 = event.gesture.touches[1].screenY || 0;
						
							var pX = ((x1 + x2) * 0.5 - offset.left) / scale;
							var pY = ((y1 + y2) * 0.5 - offset.top) / scale;
						
							var pos = $this.position();
						
							pX -= pos.left / scale;
							pY -= pos.top / scale;
						
							origin.x = pX;
							origin.y = pY;
						}
					});
					
					wrapper.bind("transform", function(event) {
						if(event && event.gesture){
							scale = Math.max($settings.minZoom, Math.min(
								prevScale * event.gesture.scale, $settings.maxZoom));
						
							transform();
						}
					});
					
					wrapper.bind("transformend", function(event) {
						prevScale = scale;
					});
					
					wrapper.bind("drag", function(event) {
						if(event && event.gesture){
							if(lastEvent){
								origin.x += (lastEvent.gesture.deltaX - event.gesture.deltaX) / scale;
								origin.y += (lastEvent.gesture.deltaY - event.gesture.deltaY) / scale;
								transform();
							}
						
							lastEvent = event;
							if(scale > 1){
								event.gesture.srcEvent.preventDefault();
								event.gesture.srcEvent.stopPropagation();
							}
						}
					});
					
					wrapper.bind("dragend", function(event){
						lastEvent = null;
					});
				}
				
				var bindDesktop = function(){
					wrapper.mousewheel(function(event, delta, deltaX, deltaY){
						var pX = (event.clientX - offset.left) / scale;
						var pY = (event.clientY - offset.top) / scale;
						
						var pos = $this.position();
						pX -= pos.left / scale;
						pY -= pos.top / scale;
						
						origin.x = pX;
						origin.y = pY;
						
						scale += delta * $settings.scrollSensitivity;
						if(scale < $settings.maxZoom && scale > $settings.minZoom){
							// prevent scrolling event when we're still in the valid zoom ranges
							event.preventDefault();
							event.stopPropagation();
						}
						
						scale = Math.max($settings.minZoom, Math.min(scale, $settings.maxZoom));
						wrapper.css("cursor", scale > 1 ? "move" : "auto");
						transform();
					});
					
					// build drag functionality for desktop if hammer isn't available
					if((typeof jQuery.fn.hammer != "function") || $settings.disableHammer){
						var onDrag = function(event){
							if(lastEvent){
								origin.x += (lastEvent.clientX - event.clientX) / scale;
								origin.y += (lastEvent.clientY - event.clientY) / scale;
								transform();
							}
							
							lastEvent = event;
							
							if(scale > 1){
								event.preventDefault();
								event.stopPropagation();
								return false;
							}
						}
						wrapper.mousedown(function(e){
							if(scale > 1){
								e.preventDefault();
								e.stopPropagation();
								$(document).bind("mousemove", onDrag);
								return false;
							}
						});
						
						$(document).mouseup(function(e){
							$(document).unbind("mousemove", onDrag);
							lastEvent = null;
						});
					}
				};
				
				// get the actual offset of the element to transform
				$("." + $settings.wrapperClass + " " + $this[0].tagName).each(function(){
					offset = $(this).offset();
				});
				
				var transform = function() {
					if($settings.confine){
						scale = Math.max(1, scale);
						
						origin.x = Math.min(wi, Math.max(0, origin.x));
						origin.y = Math.min(he, Math.max(0, origin.y));
					}
					
					var props = {};
					$(vendorPrefixes).each(function(i, vendor) {
						props[vendor +"transform"] = "scale("+ scale +")";
						props[vendor +"transform-origin"] = origin.x + "px " + origin.y + "px";
					});
					$this.css(props);
				};
				
				if((typeof jQuery.fn.hammer == "function") && !$settings.disableHammer){
					bindMobile();
				}
				if((typeof jQuery.fn.mousewheel == "function")){
					bindDesktop();
				}
			});
		},
		
		destroy : function(){
			return this.each(function() {
				var $this = $(this);
				if($this.data("hasImageZoom")){
					var settings = $this.data(settings) || $.fn.imageZoom.defaults;
					
					$this.attr("style", $this.data("originalStyles") || "");
					$this.unwrap("." + settings.wrapperClass);
					
					$this.data("hasImageZoom", false);
				}
			});
		}
	};
	
	$.fn.imageZoom = function(method) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || !method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.imageZoom' );
		}
	};
	
	/**
	 * @private debug helper function
	 */
	function _debug($msg, $elem) {
		if (window.console && window.console.log) window.console.log($msg);
		if($elem) $($elem).text($msg);
	};
	
	// Plugin defaults
	$.fn.imageZoom.defaults = {
		wrapper: "<div></div>",
		wrapperClass: "zoomWrapper",
		minZoom: 1,
		maxZoom: 5,
		confine: true,
		scrollSensitivity: 0.2,
		hammerSettings: {
			prevent_default: false,
			swipe: false,
			scale_treshold: 0,
			drag_min_distance: 0
		},
		disableHammer: false
	};
})(jQuery);
