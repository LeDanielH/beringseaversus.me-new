'use strict';

var me = 'Hello Daniel';
'use strict';

//$(window).load(function () {
//	scrollToOnLoad();
//	goBack();
//});
//
//function scrollToOnLoad() {
//	var $currentHash = window.location.hash;
//	var $page = $('.nav').find('a[href="' + $currentHash + '"]');
//
//	if ($product.length) {
//		$product.trigger('click');
//		setTimeout(function() {
//			$('html, body').animate({
//				scrollTop: $('.wrapper-products').offset().top
//			}, 300);
//		}, 600);
//	}
//}

var Ajax = {
	$navWrapper: $('.nav'),
	$navLink: $('.nav__link'),
	$container: $('#container'),
	paths: {
		current: '',
		next: '',
		previousPaths: []
	},
	vars: function vars() {
		var self = this;
		self.paths.current = window.location.pathname;
		self.activeLink = self.$navLink.hasClass('active');
	},

	next: function next(pathNext) {
		var self = this;
		self.pathNext = pathNext;
		self.currentPath = window.location.pathname;
		self.previousPaths.push(self.currentPath);
		self.$container.html('<p>Loading... </p>').load(self.pathNext);
	},

	previous: function previous(previousPath) {
		var self = this;
		self.$previousPath = previousPath;
		self.$container.html('<p>Loading... </p>').load(self.$previousPath);
	},

	init: function init() {
		var self = this;
		self.vars();
		self.$navLink.on('click', function (e) {
			e.preventDefault();
			self.$currentPath = window.location.pathname;
			var pathNext = $($(this).attr('href'));
			Ajax.next(pathNext);
		});
		$(window).on('popstate', function () {
			if (window.history && window.history.pushState) {
				var previousPath = self.currentPath;
				self.previous();
			}
		});
	}
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiaGVscGVycy9hamF4LXBhZ2VzLmpzIl0sIm5hbWVzIjpbIm1lIiwiQWpheCIsIiRuYXZXcmFwcGVyIiwiJCIsIiRuYXZMaW5rIiwiJGNvbnRhaW5lciIsInBhdGhzIiwiY3VycmVudCIsIm5leHQiLCJwcmV2aW91c1BhdGhzIiwidmFycyIsInNlbGYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYWN0aXZlTGluayIsImhhc0NsYXNzIiwicGF0aE5leHQiLCJjdXJyZW50UGF0aCIsInB1c2giLCJodG1sIiwibG9hZCIsInByZXZpb3VzIiwicHJldmlvdXNQYXRoIiwiJHByZXZpb3VzUGF0aCIsImluaXQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiRjdXJyZW50UGF0aCIsImF0dHIiLCJoaXN0b3J5IiwicHVzaFN0YXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLEtBQUssY0FBVDs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlDLE9BQU87QUFDVkMsY0FBYUMsRUFBRSxNQUFGLENBREg7QUFFVkMsV0FBVUQsRUFBRSxZQUFGLENBRkE7QUFHVkUsYUFBWUYsRUFBRSxZQUFGLENBSEY7QUFJVkcsUUFBTztBQUNOQyxXQUFTLEVBREg7QUFFTkMsUUFBTSxFQUZBO0FBR05DLGlCQUFlO0FBSFQsRUFKRztBQVNWQyxPQUFNLGdCQUFZO0FBQ2pCLE1BQUlDLE9BQU8sSUFBWDtBQUNBQSxPQUFLTCxLQUFMLENBQVdDLE9BQVgsR0FBcUJLLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQXJDO0FBQ0FILE9BQUtJLFVBQUwsR0FBa0JKLEtBQUtQLFFBQUwsQ0FBY1ksUUFBZCxDQUF1QixRQUF2QixDQUFsQjtBQUNBLEVBYlM7O0FBZVZSLE9BQU0sY0FBVVMsUUFBVixFQUFvQjtBQUN6QixNQUFJTixPQUFPLElBQVg7QUFDQUEsT0FBS00sUUFBTCxHQUFnQkEsUUFBaEI7QUFDQU4sT0FBS08sV0FBTCxHQUFtQk4sT0FBT0MsUUFBUCxDQUFnQkMsUUFBbkM7QUFDQUgsT0FBS0YsYUFBTCxDQUFtQlUsSUFBbkIsQ0FBd0JSLEtBQUtPLFdBQTdCO0FBQ0FQLE9BQUtOLFVBQUwsQ0FBZ0JlLElBQWhCLENBQXFCLG9CQUFyQixFQUEyQ0MsSUFBM0MsQ0FBZ0RWLEtBQUtNLFFBQXJEO0FBQ0EsRUFyQlM7O0FBdUJWSyxXQUFVLGtCQUFVQyxZQUFWLEVBQXdCO0FBQ2pDLE1BQUlaLE9BQU8sSUFBWDtBQUNBQSxPQUFLYSxhQUFMLEdBQXFCRCxZQUFyQjtBQUNBWixPQUFLTixVQUFMLENBQWdCZSxJQUFoQixDQUFxQixvQkFBckIsRUFBMkNDLElBQTNDLENBQWdEVixLQUFLYSxhQUFyRDtBQUNBLEVBM0JTOztBQTZCVkMsT0FBTSxnQkFBWTtBQUNqQixNQUFJZCxPQUFPLElBQVg7QUFDQUEsT0FBS0QsSUFBTDtBQUNBQyxPQUFLUCxRQUFMLENBQWNzQixFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFVBQVVDLENBQVYsRUFBYTtBQUN0Q0EsS0FBRUMsY0FBRjtBQUNBakIsUUFBS2tCLFlBQUwsR0FBb0JqQixPQUFPQyxRQUFQLENBQWdCQyxRQUFwQztBQUNBLE9BQUlHLFdBQVdkLEVBQUVBLEVBQUUsSUFBRixFQUFRMkIsSUFBUixDQUFhLE1BQWIsQ0FBRixDQUFmO0FBQ0E3QixRQUFLTyxJQUFMLENBQVVTLFFBQVY7QUFDQSxHQUxEO0FBTUFkLElBQUVTLE1BQUYsRUFBVWMsRUFBVixDQUFhLFVBQWIsRUFBeUIsWUFBWTtBQUNwQyxPQUFJZCxPQUFPbUIsT0FBUCxJQUFrQm5CLE9BQU9tQixPQUFQLENBQWVDLFNBQXJDLEVBQWdEO0FBQy9DLFFBQUlULGVBQWVaLEtBQUtPLFdBQXhCO0FBQ0FQLFNBQUtXLFFBQUw7QUFDQTtBQUNELEdBTEQ7QUFNQTtBQTVDUyxDQUFYIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWUgPSAnSGVsbG8gRGFuaWVsJztcbiIsIi8vJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xuLy9cdHNjcm9sbFRvT25Mb2FkKCk7XG4vL1x0Z29CYWNrKCk7XG4vL30pO1xuLy9cbi8vZnVuY3Rpb24gc2Nyb2xsVG9PbkxvYWQoKSB7XG4vL1x0dmFyICRjdXJyZW50SGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuLy9cdHZhciAkcGFnZSA9ICQoJy5uYXYnKS5maW5kKCdhW2hyZWY9XCInICsgJGN1cnJlbnRIYXNoICsgJ1wiXScpO1xuLy9cbi8vXHRpZiAoJHByb2R1Y3QubGVuZ3RoKSB7XG4vL1x0XHQkcHJvZHVjdC50cmlnZ2VyKCdjbGljaycpO1xuLy9cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuLy9cdFx0XHRcdHNjcm9sbFRvcDogJCgnLndyYXBwZXItcHJvZHVjdHMnKS5vZmZzZXQoKS50b3Bcbi8vXHRcdFx0fSwgMzAwKTtcbi8vXHRcdH0sIDYwMCk7XG4vL1x0fVxuLy99XG5cbnZhciBBamF4ID0ge1xuXHQkbmF2V3JhcHBlcjogJCgnLm5hdicpLFxuXHQkbmF2TGluazogJCgnLm5hdl9fbGluaycpLFxuXHQkY29udGFpbmVyOiAkKCcjY29udGFpbmVyJyksXG5cdHBhdGhzOiB7XG5cdFx0Y3VycmVudDogJycsXG5cdFx0bmV4dDogJycsXG5cdFx0cHJldmlvdXNQYXRoczogW11cblx0fSxcblx0dmFyczogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRzZWxmLnBhdGhzLmN1cnJlbnQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cdFx0c2VsZi5hY3RpdmVMaW5rID0gc2VsZi4kbmF2TGluay5oYXNDbGFzcygnYWN0aXZlJyk7XG5cdH0sXG5cblx0bmV4dDogZnVuY3Rpb24gKHBhdGhOZXh0KSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNlbGYucGF0aE5leHQgPSBwYXRoTmV4dDtcblx0XHRzZWxmLmN1cnJlbnRQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXHRcdHNlbGYucHJldmlvdXNQYXRocy5wdXNoKHNlbGYuY3VycmVudFBhdGgpO1xuXHRcdHNlbGYuJGNvbnRhaW5lci5odG1sKCc8cD5Mb2FkaW5nLi4uIDwvcD4nKS5sb2FkKHNlbGYucGF0aE5leHQpO1xuXHR9LFxuXG5cdHByZXZpb3VzOiBmdW5jdGlvbiAocHJldmlvdXNQYXRoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHNlbGYuJHByZXZpb3VzUGF0aCA9IHByZXZpb3VzUGF0aDtcblx0XHRzZWxmLiRjb250YWluZXIuaHRtbCgnPHA+TG9hZGluZy4uLiA8L3A+JykubG9hZChzZWxmLiRwcmV2aW91c1BhdGgpO1xuXHR9LFxuXG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0c2VsZi52YXJzKCk7XG5cdFx0c2VsZi4kbmF2TGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi4kY3VycmVudFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cdFx0XHR2YXIgcGF0aE5leHQgPSAkKCQodGhpcykuYXR0cignaHJlZicpKTtcblx0XHRcdEFqYXgubmV4dChwYXRoTmV4dCk7XG5cdFx0fSk7XG5cdFx0JCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcblx0XHRcdFx0dmFyIHByZXZpb3VzUGF0aCA9IHNlbGYuY3VycmVudFBhdGg7XG5cdFx0XHRcdHNlbGYucHJldmlvdXMoKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cbn07XG5cbiJdfQ==
