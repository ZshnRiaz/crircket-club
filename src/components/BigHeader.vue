<template>
  <div class="bigslam-header-background-transparent">
    <div class="bigslam-top-bar">
      <div class="bigslam-top-bar-background"></div>
      <div class="bigslam-top-bar-container clearfix bigslam-top-bar-full ">
        <div class="bigslam-top-bar-left bigslam-item-pdlr"><span class="bigslam-upcoming-match-wrapper"><span
              class="bigslam-upcoming-match-title">Upcoming Match</span><span class="bigslam-upcoming-match-link">Big
              Slam VS Miami Heats<span class="bigslam-sep">/</span>March 10,
              2022<span class="bigslam-sep">/</span>New Yorkers Stadium</span>
          </span>
        </div>
        <div class="bigslam-top-bar-right bigslam-item-pdlr">
          <div class="bigslam-top-bar-right-text"><i class="fa fa-envelope-open-o"
              style="font-size: 14px ;color: #ec4613 ;margin-right: 7px ;"></i> <a href="#" class="__cf_email__"
              data-cfemail="fb9894958f9a988fbb9c99929c88979a96d5989496">test@gmail.com</a><span
              style="margin-left: 20px; color: #ec4613;">/</span><i class="fa fa-phone"
              style="font-size: 14px ;color: #ec4613 ;margin-left: 20px ;margin-right: 7px ;"></i> 1800-22345 <span
              style="margin-left: 15px; color: #ec4613;">/</span></div>
          <div class="bigslam-top-bar-right-social"><a href="#" target="_blank" class="bigslam-top-bar-social-icon"
              title="facebook"><i class="fa fa-facebook"></i></a><a href="#" target="_blank"
              class="bigslam-top-bar-social-icon" title="pinterest"><i class="fa fa-pinterest-p"></i></a><a href="#"
              target="_blank" class="bigslam-top-bar-social-icon" title="twitter"><i class="fa fa-twitter"></i></a><a
              href="#" target="_blank" class="bigslam-top-bar-social-icon" title="vimeo"><i class="fa fa-vimeo"></i></a>
          </div>
        </div>
      </div>
    </div>
    <header
      class="bigslam-header-wrap bigslam-header-style-plain  bigslam-style-menu-right bigslam-sticky-navigation bigslam-style-slide">
      <div class="bigslam-header-background"></div>
      <div class="bigslam-header-container  bigslam-header-full">

        <div class="bigslam-header-container-inner clearfix">
          <div class="bigslam-logo  bigslam-item-pdlr">
            <div class="bigslam-logo-inner">
              <a href="index.html">
                <img src="https://max-themes.net/demos/bigslam/bigslam/upload/logo.png" alt="" width="131" height="160"
                  title="logo">
              </a>
            </div>
          </div>
          <div class="bigslam-navigation bigslam-item-pdlr clearfix ">
            <div class="bigslam-main-menu" id="bigslam-main-menu">
              <ul id="menu-main-navigation-1" class="sf-menu">
                <li class="menu-item menu-item-home current-menu-item bigslam-normal-menu"><router-link
                    :to="'/'">Home</router-link>
                </li>
                <li class="menu-item menu-item-has-children bigslam-normal-menu"><a href="schedule.html"
                    class="sf-with-ul-pre">Our Team</a>
                  <ul class="sub-menu">
                    <li class="menu-item" data-size="60"><router-link :to="'/team-statics'">Team Statics</router-link>
                    </li>
                    <li class="menu-item" data-size="60"><router-link :to="'/player-list'">Player Gallery</router-link>
                    </li>
                    <!-- <li class="menu-item" data-size="60"><a href="schedule-medium-style.html">Schedule – Medium
                        Style</a></li>
                    <li class="menu-item" data-size="60"><a href="schedule-widget-style.html">Schedule – Widget
                        Style</a></li> -->
                  </ul>
                </li>
                <li style="visibility: hidden" class="menu-item menu-item-has-children bigslam-normal-menu"><a
                    href="player-list-default-style.html" class="sf-with-ul-pre">Our Team</a>
                  <ul class="sub-menu">
                    <li class="menu-item" data-size="60"><a href="player-list-default-style.html">Player List –
                        Default Style</a></li>
                    <li class="menu-item" data-size="60"><a href="player-list-gallery.html">Player List –
                        Gallery</a></li>
                    <li class="menu-item" data-size="60"><a href="player-list-style-1.html">Player List – Style
                        1</a></li>
                    <li class="menu-item" data-size="60"><a href="player-list-style-2.html">Player List – Style
                        2</a></li>
                  </ul>
                </li>
                <li style="visibility: hidden" class="menu-item  bigslam-normal-menu"><a href="big-slam.html">Our
                    Team</a></li>
                <li style="visibility: hidden" class="menu-item menu-item-has-children bigslam-normal-menu"><a href="#"
                    class="sf-with-ul-pre">SportsPress</a>
                  <ul class="sub-menu">
                    <li class="menu-item menu-item-has-children" data-size="60"><a href="#"
                        class="sf-with-ul-pre">Game</a>
                      <ul class="sub-menu">
                        <li class="menu-item"><a href="games-details.html">Games Details</a></li>
                        <li class="menu-item"><a href="game-results.html">Game Results</a></li>
                        <li class="menu-item"><a href="game-box-scores.html">Game Box Scores</a></li>
                        <li class="menu-item"><a href="game-calendar.html">Game Calendar</a></li>
                        <li class="menu-item"><a href="game-list.html">Game List</a></li>
                        <li class="menu-item"><a href="game-blocks.html">Game Blocks</a></li>
                        <li class="menu-item"><a href="game-countdown.html">Game Countdown</a></li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children" data-size="60"><a href="#"
                        class="sf-with-ul-pre">Player</a>
                      <ul class="sub-menu">
                        <li class="menu-item"><a href="player-details.html">Player Details</a></li>
                        <li class="menu-item"><a href="player-statics.html">Player Statics</a></li>
                        <li class="menu-item"><a href="player-list-default-style.html">Player List</a></li>
                        <li class="menu-item"><a href="player-list-gallery.html">Player Gallery</a></li>
                      </ul>
                    </li>
                    <li class="menu-item" data-size="60"><a href="league-table.html">League Table</a></li>
                  </ul>
                </li>
                <li style="visibility: hidden" class="menu-item menu-item-has-children bigslam-normal-menu"><a href="#"
                    class="sf-with-ul-pre">Pages</a>
                  <ul class="sub-menu">
                    <li class="menu-item menu-item-has-children" data-size="60"><a href="#"
                        class="sf-with-ul-pre">About</a>
                      <ul class="sub-menu">
                        <li class="menu-item"><a href="about-us.html">About Us</a></li>
                        <li class="menu-item"><a href="about-us-2.html">About Us 2</a></li>
                        <li class="menu-item"><a href="about-us-3.html">About Us 3</a></li>
                        <li class="menu-item"><a href="about-our-team.html">About Our Team</a></li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children" data-size="60"><a href="portfolio-3-columns.html"
                        class="sf-with-ul-pre">Portfolio</a>
                      <ul class="sub-menu">
                        <li class="menu-item menu-item-has-children"><a class="sf-with-ul-pre">Portfolio Grid</a>
                          <ul class="sub-menu">
                            <li class="menu-item"><a href="portfolio-2-columns.html">Portfolio 2 Columns</a></li>
                            <li class="menu-item"><a href="portfolio-3-columns.html">Portfolio 3 Columns</a></li>
                            <li class="menu-item"><a href="portfolio-4-columns.html">Portfolio 4 Columns</a></li>
                            <li class="menu-item"><a href="portfolio-5-columns.html">Portfolio 5 Columns</a></li>
                            <li class="menu-item"><a href="portfolio-2-columns-with-frame.html">Portfolio 2 Columns
                                With Frame</a></li>
                            <li class="menu-item"><a href="portfolio-3-columns-with-frame.html">Portfolio 3 Columns
                                With Frame</a></li>
                            <li class="menu-item"><a href="portfolio-4-columns-with-frame.html">Portfolio 4 Columns
                                With Frame</a></li>
                            <li class="menu-item"><a href="portfolio-2-columns-no-space.html">Portfolio 2 Columns No
                                Space</a></li>
                            <li class="menu-item"><a href="portfolio-3-columns-no-space.html">Portfolio 3 Columns No
                                Space</a></li>
                            <li class="menu-item"><a href="portfolio-4-columns-no-space.html">Portfolio 4 Columns No
                                Space</a></li>
                            <li class="menu-item"><a href="portfolio-5-columns-no-space.html">Portfolio 5 Columns No
                                Space</a></li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children"><a class="sf-with-ul-pre">Portfolio Masonry</a>
                          <ul class="sub-menu">
                            <li class="menu-item"><a href="portfolio-masonry-4-columns.html">Masonry 4 Columns</a>
                            </li>
                            <li class="menu-item"><a href="portfolio-masonry-3-columns.html">Masonry 3 Columns</a>
                            </li>
                            <li class="menu-item"><a href="portfolio-masonry-2-columns.html">Masonry 2 Columns</a>
                            </li>
                            <li class="menu-item"><a href="portfolio-masonry-4-columns-no-space.html">Masonry 4
                                Columns No Space</a></li>
                            <li class="menu-item"><a href="portfolio-masonry-3-columns-no-space.html">Masonry 3
                                Columns No Space</a></li>
                            <li class="menu-item"><a href="portfolio-masonry-2-columns-no-space.html">Masonry 2
                                Columns No Space</a></li>
                          </ul>
                        </li>

                        <li class="menu-item menu-item-has-children"><a class="sf-with-ul-pre">Portfolio Side
                            Thumb</a>
                          <ul class="sub-menu">

                            <li class="menu-item"><a href="portfolio-left-small-thumbnail.html">Portfolio Left Small
                                Thumbnail</a></li>
                            <li class="menu-item"><a href="portfolio-right-small-thumbnail.html">Portfolio Right
                                Small Thumbnail</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item" data-size="60"><a href="contact.html">Contact</a></li>
                    <li class="menu-item" data-size="60"><a href="price-table.html">Price Table</a></li>
                    <li class="menu-item" data-size="60"><a href="maintenance.html">Maintenance</a></li>
                    <li class="menu-item" data-size="60"><a href="coming-soon.html">Coming Soon</a></li>
                    <li class="menu-item" data-size="60"><a href="404.html">404 Page</a></li>
                  </ul>
                </li>
                <li style="visibility: hidden" class="menu-item menu-item-has-children bigslam-normal-menu"><a
                    href="blog-full-right-sidebar.html" class="sf-with-ul-pre">Blog</a>
                  <ul class="sub-menu">
                    <li class="menu-item menu-item-has-children" data-size="60"><a
                        href="blog-full-right-sidebar-with-frame.html" class="sf-with-ul-pre">Blog Full</a>
                      <ul class="sub-menu">
                        <li class="menu-item"><a href="blog-full-right-sidebar-with-frame.html">Blog Full Right
                            Sidebar With Frame</a></li>
                        <li class="menu-item"><a href="blog-full-left-sidebar-with-frame.html">Blog Full Left
                            Sidebar With Frame</a></li>
                        <li class="menu-item"><a href="blog-full-both-sidebar-with-frame.html">Blog Full Both
                            Sidebar With Frame</a></li>
                        <li class="menu-item"><a href="blog-full-right-sidebar.html">Blog Full Right Sidebar</a>
                        </li>
                        <li class="menu-item"><a href="blog-full-left-sidebar.html">Blog Full Left Sidebar</a></li>
                        <li class="menu-item"><a href="blog-full-both-sidebar.html">Blog Full Both Sidebar</a></li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children" data-size="60"><a
                        href="blog-grid-3-columns-no-space.html" class="sf-with-ul-pre">Blog Grid</a>
                      <ul class="sub-menu">
                        <li class="menu-item"><a href="blog-grid-2-columns.html">Blog Grid 2 Columns</a></li>
                        <li class="menu-item"><a href="blog-grid-3-columns.html">Blog Grid 3 Columns</a></li>
                        <li class="menu-item"><a href="blog-grid-4-columns.html">Blog Grid 4 Columns</a></li>

                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children" data-size="60"><a href="blog-3-columns-with-frame.html"
                        class="sf-with-ul-pre">Blog Columns</a>
                      <ul class="sub-menu">

                        <li class="menu-item"><a href="blog-2-columns.html">Blog 2 Columns</a></li>
                        <li class="menu-item"><a href="blog-3-columns.html">Blog 3 Columns</a></li>
                        <li class="menu-item"><a href="blog-4-columns.html">Blog 4 Columns</a></li>
                      </ul>
                    </li>
                    <li class="menu-item" data-size="60"><a href="standard-post-type.html">Single Posts</a></li>
                  </ul>
                </li>
                <li style="visibility: hidden" class="menu-item menu-item-has-children bigslam-mega-menu"><a href="#"
                    class="sf-with-ul-pre">Features</a>
                  <div class="sf-mega sf-mega-full">
                    <ul class="sub-menu">
                      <li class="menu-item menu-item-has-children" data-size="15">
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="accordions-toggles.html">Accordions &#038; Toggles</a></li>
                          <li class="menu-item"><a href="alert-box.html">Alert Box</a></li>
                          <li class="menu-item"><a href="blockquotes.html">Blockquotes</a></li>
                          <li class="menu-item"><a href="buttons.html">Buttons</a></li>
                          <li class="menu-item"><a href="call-to-action.html">Call To Action</a></li>
                          <li class="menu-item"><a href="column-services.html">Column Services</a></li>
                          <li class="menu-item"><a href="columns.html">Columns</a></li>
                        </ul>
                      </li>
                      <li class="menu-item menu-item-has-children" data-size="15">
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="counters.html">Counters</a></li>
                          <li class="menu-item"><a href="count-down.html">Count Down</a></li>
                          <li class="menu-item"><a href="dividers.html">Dividers</a></li>
                          <li class="menu-item"><a href="dropcaps.html">Dropcaps</a></li>
                          <li class="menu-item"><a href="featured-boxes.html">Featured Boxes</a></li>
                          <li class="menu-item"><a href="flip-boxes.html">Flip Boxes</a></li>
                          <li class="menu-item"><a href="icon-list.html">Icon Lists</a></li>
                        </ul>
                      </li>
                      <li class="menu-item menu-item-has-children" data-size="15">
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="icons.html">Icons</a></li>
                          <li class="menu-item"><a href="images.html">Images</a></li>
                          <li class="menu-item"><a href="price-table.html">Price Table</a></li>
                          <li class="menu-item"><a href="promo-boxes.html">Promo Boxes</a></li>
                          <li class="menu-item"><a href="skill-bar.html">Skill Bar</a></li>
                          <li class="menu-item"><a href="skill-circle.html">Skill Circle</a></li>
                        </ul>
                      </li>
                      <li class="menu-item menu-item-has-children" data-size="15">
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="social-shares.html">Social Shares</a></li>
                          <li class="menu-item"><a href="stunning-texts.html">Stunning Texts</a></li>
                          <li class="menu-item"><a href="tabs-horizontal.html">Tabs Horizontal</a></li>
                          <li class="menu-item"><a href="tabs-vertical.html">Tabs Vertical</a></li>
                          <li class="menu-item"><a href="testimonial.html">Testimonial</a></li>
                          <li class="menu-item"><a href="titles.html">Titles</a></li>
                          <li class="menu-item"><a href="typography.html">Typography</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div class="bigslam-navigation-slide-bar" id="bigslam-navigation-slide-bar"></div>
              <div class="bigslam-navigation-slide-bar-small" id="bigslam-navigation-slide-bar-small"></div>
            </div>
            <div class="bigslam-main-menu-right-wrap clearfix ">
              <div class="bigslam-main-menu-search" id="bigslam-top-search"><i class="fa fa-search"></i></div>
              <div class="bigslam-top-search-wrap">
                <div class="bigslam-top-search-close"></div>

                <div class="bigslam-top-search-row">
                  <div class="bigslam-top-search-cell">
                    <form role="search" method="get" class="search-form" action="index.html">
                      <input type="text" class="search-field bigslam-title-font" placeholder="Search..." value=""
                        name="s">
                      <div class="bigslam-top-search-submit"><i class="fa fa-search"></i></div>
                      <input type="submit" class="search-submit" value="Search">
                      <div class="bigslam-top-search-close"><i class="icon_close"></i></div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <!-- bigslam-navigation -->
        </div>
        <!-- bigslam-header-inner -->
      </div>
      <!-- bigslam-header-container -->

      <div class="bigslam-navigation-slide-bar-long" id="bigslam-navigation-slide-bar-long"></div>
    </header>
    <!-- header -->
  </div>
</template>

<script>
export default {

}
</script>

<style></style>
