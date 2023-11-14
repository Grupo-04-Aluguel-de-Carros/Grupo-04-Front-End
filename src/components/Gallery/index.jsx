import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Container,
  DivGallery,
  GalleryMainImage,
  GalleryImage,
  MorePhotos,
  Modal,
  ModalContent,
  CloseModal,
  DivGalleryMobile,
} from "./styles";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
} from "swiper/modules";

export function Gallery() {
  const [openModal, setOpenModal] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(" ");

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Container>
        <GalleryMainImage
          $source={
            "https://cdn.motor1.com/images/mgl/3MqkX/s1/2020-porsche-911-turbo.jpg"
          }
        />

        <DivGallery>
          <GalleryImage
            $source={
              "https://cdn.motor1.com/images/mgl/JPGM4/s1/2020-porsche-911-turbo.jpg"
            }
          />
          <GalleryImage
            $source={
              "https://cdn.motor1.com/images/mgl/w0gyV/s1/2020-porsche-911-turbo.jpg"
            }
          />

          <GalleryImage
            $source={
              "https://cdn.motor1.com/images/mgl/nRWKG/s1/2020-porsche-911-turbo.jpg"
            }
          />

          <GalleryImage
            $source={
              "https://cdn.motor1.com/images/mgl/yKJwK/s1/2020-porsche-911-turbo.jpg"
            }
          ></GalleryImage>
          <MorePhotos onClick={toggleModal}>Ver mais</MorePhotos>
        </DivGallery>
      </Container>
      <DivGalleryMobile>
        <Container>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://cdn.motor1.com/images/mgl/3MqkX/s1/2020-porsche-911-turbo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.motor1.com/images/mgl/JPGM4/s1/2020-porsche-911-turbo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.motor1.com/images/mgl/w0gyV/s1/2020-porsche-911-turbo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.motor1.com/images/mgl/nRWKG/s1/2020-porsche-911-turbo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cdn.motor1.com/images/mgl/yKJwK/s1/2020-porsche-911-turbo.jpg" />
            </SwiperSlide>
          </Swiper>
        </Container>
      </DivGalleryMobile>

      {!openModal ? (
        <></>
      ) : (
        <Modal>
          <ModalContent>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/3MqkX/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/JPGM4/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/w0gyV/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/nRWKG/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/yKJwK/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/3MqkX/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/JPGM4/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/w0gyV/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/nRWKG/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://cdn.motor1.com/images/mgl/yKJwK/s1/2020-porsche-911-turbo.jpg" />
              </SwiperSlide>
            </Swiper>
          </ModalContent>
          <CloseModal onClick={toggleModal} />
        </Modal>
      )}
    </>
  );
}
