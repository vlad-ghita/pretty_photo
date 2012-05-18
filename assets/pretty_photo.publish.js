(function($){

	$(document).ready(function(){

		// prepare for Pretty Photo

		var env = Symphony.Context.get('env');
		var changepicturecallback = null;

		if( env['page'] === 'index' ){
			var $table = $('#contents table:eq(0)');

			$table.find('a > img').each(function(){
				var $this = $(this);
				var $td = $this.parents('td');

				if( $td.length === 0 ) return false;

				$this.attr('alt', $table.find('th:eq('+$td.index()+')').text());

				$this.parent().attr({
					'rel': 'prettyPhoto[album]',
					'title': $td.siblings(':eq(0)').html()
				});
			});

			changepicturecallback = function(){
				var $desc = $('.pp_description');
				$desc.html($desc.html()+': '+$('.ppt').hide().text());
			}
		}

		else if( env['page'] === 'edit' ){
			var excluded = '.field-selectbox_link_plus';

			var entry_title = $('#breadcrumbs h2').text();

			$('#contents div[id*=field]').not(excluded).find('a > img').each(function(){
				$(this).parent().attr({
					'rel': 'prettyPhoto[album]'
				});
			});

			changepicturecallback = function(){
				$('.pp_description').show().html(entry_title);
			}
		}

		$("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast',
			slideshow: false,
			opacity: 0.30,
			show_title: true,
			default_width: 500,
			default_height: 344,
			changepicturecallback: changepicturecallback,
			markup: '<div class="pp_pic_holder"> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											<div class="ppt">&nbsp;</div> \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			social_tools: false
		});
	});

})(jQuery.noConflict());
