import React from "react";
import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <h3 className="section-name">НАШ БЛОГ</h3>
        <div className="blog-box">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper">
            <SwiperSlide>
              <img
                src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog4&dirtyAlias=7ea8acf444-1_500x306.jpg"
                alt=""
                className="blog-img"
              />
              <h4 className="blog-subname">
                ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА, ДО РУЛОННЫХ ГАЗОНОВ{" "}
              </h4>
              <p className="blog-text">
                В настоящее время газон служит не только в качестве декора: с
                его помощью создают уютные площадки для семейных пикников,
                детских развлечений на свежем воздухе, организации спортивных
                комплексов. Уход за ними осуществляется с помощью газонокосилки
                или трим
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog4&dirtyAlias=7ea8acf444-1_500x306.jpg"
                alt=""
                className="blog-img"
              />
              <h4 className="blog-subname">
                ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА, ДО РУЛОННЫХ ГАЗОНОВ{" "}
              </h4>
              <p className="blog-text">
                В настоящее время газон служит не только в качестве декора: с
                его помощью создают уютные площадки для семейных пикников,
                детских развлечений на свежем воздухе, организации спортивных
                комплексов. Уход за ними осуществляется с помощью газонокосилки
                или трим
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog4&dirtyAlias=7ea8acf444-1_500x306.jpg"
                alt=""
                className="blog-img"
              />
              <h4 className="blog-subname">
                ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА, ДО РУЛОННЫХ ГАЗОНОВ{" "}
              </h4>
              <p className="blog-text">
                В настоящее время газон служит не только в качестве декора: с
                его помощью создают уютные площадки для семейных пикников,
                детских развлечений на свежем воздухе, организации спортивных
                комплексов. Уход за ними осуществляется с помощью газонокосилки
                или трим
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog4&dirtyAlias=7ea8acf444-1_500x306.jpg"
                alt=""
                className="blog-img"
              />
              <h4 className="blog-subname">
                ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА, ДО РУЛОННЫХ ГАЗОНОВ{" "}
              </h4>
              <p className="blog-text">
                В настоящее время газон служит не только в качестве декора: с
                его помощью создают уютные площадки для семейных пикников,
                детских развлечений на свежем воздухе, организации спортивных
                комплексов. Уход за ними осуществляется с помощью газонокосилки
                или трим
              </p>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="blog-items">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiperone">
          <SwiperSlide>
            <img
              src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog4&dirtyAlias=7ea8acf444-1_500x306.jpg"
              alt=""
              className="blog-img"
            />
            <h4 className="blog-subname">
              ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА, ДО РУЛОННЫХ ГАЗОНОВ{" "}
            </h4>
            <p className="blog-text">
              В настоящее время газон служит не только в качестве декора: с его
              помощью создают уютные площадки для семейных пикников, детских
              развлечений на свежем воздухе, организации спортивных комплексов.
              Уход за ними осуществляется с помощью газонокосилки или трим
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog4&dirtyAlias=7ea8acf444-1_500x306.jpg"
              alt=""
              className="blog-img"
            />
            <h4 className="blog-subname">
              ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА, ДО РУЛОННЫХ ГАЗОНОВ{" "}
            </h4>
            <p className="blog-text">
              В настоящее время газон служит не только в качестве декора: с его
              помощью создают уютные площадки для семейных пикников, детских
              развлечений на свежем воздухе, организации спортивных комплексов.
              Уход за ними осуществляется с помощью газонокосилки или трим
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog4&dirtyAlias=7ea8acf444-1_500x306.jpg"
              alt=""
              className="blog-img"
            />
            <h4 className="blog-subname">
              ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА, ДО РУЛОННЫХ ГАЗОНОВ{" "}
            </h4>
            <p className="blog-text">
              В настоящее время газон служит не только в качестве декора: с его
              помощью создают уютные площадки для семейных пикников, детских
              развлечений на свежем воздухе, организации спортивных комплексов.
              Уход за ними осуществляется с помощью газонокосилки или трим
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Blog4&dirtyAlias=7ea8acf444-1_500x306.jpg"
              alt=""
              className="blog-img"
            />
            <h4 className="blog-subname">
              ОТ САМОСТОЯТЕЛЬНОГО ПОСЕВА, ДО РУЛОННЫХ ГАЗОНОВ{" "}
            </h4>
            <p className="blog-text">
              В настоящее время газон служит не только в качестве декора: с его
              помощью создают уютные площадки для семейных пикников, детских
              развлечений на свежем воздухе, организации спортивных комплексов.
              Уход за ними осуществляется с помощью газонокосилки или трим
            </p>
          </SwiperSlide>
        </Swiper>
        </div>
      
      </div>
    </div>
  );
}

export default Blog;
