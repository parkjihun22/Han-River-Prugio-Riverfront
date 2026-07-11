import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",

  title: "한강 푸르지오 리버프론트 타입안내",

  description:
    "한강 푸르지오 리버프론트의 84㎡·106㎡·122㎡·180㎡PH 타입별 평면을 확인할 수 있습니다. 타입별 공간 구성과 생활 동선을 비교하며 실거주에 적합한 주거 공간을 살펴보세요.",


  plans: [
    {
      id: "84㎡",
      type: "84㎡",
      name: "84㎡",
      summary:
        "84㎡·106㎡·122㎡·180㎡PH  타입의 평면 구성과 공간 활용을 확인해 보세요.",

      image: unit01,
      alt: "한강 푸르지오 리버프론트 84㎡ 평면도",

      link: "/FloorPlan/59A",
    },

    {
      id: "106㎡",
      type: "106㎡",
      name: "106㎡",
      summary:
        "84㎡·106㎡·122㎡·180㎡PH  타입의 평면 구성과 생활 동선을 확인해 보세요.",

      image: unit02,
      alt: "한강 푸르지오 리버프론트 106㎡ 평면도",

      link: "/FloorPlan/59B",
    },

    {
      id: "122㎡",
      type: "122㎡",
      name: "122㎡",
      summary:
        "122㎡ 타입의 넓고 여유로운 공간 구성을 확인해 보세요.",

      image: unit03,
      alt: "한강 푸르지오 리버프론트 122㎡ 평면도",

      link: "/FloorPlan/84A",
    },

    {
      id: "180㎡",
      type: "180㎡",
      name: "180㎡",
      summary:
        "180㎡ 프리미엄 타입의 공간 구성과 생활 동선을 확인해 보세요.",

      image: unit04,
      alt: "한강 푸르지오 리버프론트 180㎡ 평면도",

      link: "/FloorPlan/84B",
    },
  ],
};