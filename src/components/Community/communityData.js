import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "품격 있는 일상을 완성하는 프리미엄 단지",

  description:
    "한강 푸르지오 리버프런트는 쾌적한 단지 배치와 풍부한 조경, 입주민의 다양한 생활 방식을 고려한 커뮤니티 공간을 통해 편리한 생활과 여유로운 일상을 함께 누릴 수 있는 프리미엄 주거 환경을 제공합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "한강 푸르지오 리버프런트 프리미엄 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "쾌적한 생활을 고려한 단지 배치",

      description:
        "한강 푸르지오 리버프런트는 채광과 통풍, 주거동 간의 배치와 입주민의 보행 동선을 고려한 단지 설계를 통해 더욱 쾌적하고 편안한 주거 환경을 제공합니다.",

      image: layoutImage,
      alt: "한강 푸르지오 리버프런트 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "푸르지오의 차별화된 프리미엄 설계",

      description:
        "입주민의 라이프스타일을 고려한 조경과 휴게 공간, 효율적인 보행 동선과 차별화된 단지 설계를 적용하여 편리하고 품격 있는 주거 환경을 완성합니다.",

      image: designImage,
      alt: "한강 푸르지오 리버프런트 단지 특화설계",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "일상의 가치를 높이는 커뮤니티 공간",

      description:
        "입주민의 건강과 여가, 휴식과 소통을 위한 다양한 커뮤니티 공간을 계획하여 한강 푸르지오 리버프런트만의 더욱 풍요롭고 편리한 프리미엄 라이프를 제공합니다.",

      image: communityImage,
      alt: "한강 푸르지오 리버프런트 입주민 커뮤니티 시설",
    },
  ],
};