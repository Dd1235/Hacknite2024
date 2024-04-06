import React from "react";
import Hunger from "../resources/hunger.jpeg";
import food from "../resources/food.jpg";

export default function Gallery() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Hunger} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/522397658/photo/cheerful-children-lying-dawn-on-grass.jpg?s=612x612&w=0&k=20&c=T0i6nwk4P8AYUBOszYmCtDOi3_3G4eYeucT1RVlb3wI="
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/525404272/photo/students-rise-up-textbook-during-the-quot-textbook-festival-day-quot-in-dhaka-student.jpg?s=612x612&w=0&k=20&c=GP8ZHQ1oX1YY2Nz6814gJQev4m1n5aDjE9sM8UOBPOs="
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/944066130/photo/bijapur-india-several-school-children-during-class-at-the-dropout-school-on-march-29-2013-in.jpg?s=612x612&w=0&k=20&c=zVVy4ezI07S75XRVVrUsdeI4f_D_Rr5lHt-KxQnZdbc="
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/1515207587/photo/indian-children-study-during-a-class-at-a-bus-school-at-a-slum-in-the-northern-suburb-of.jpg?s=612x612&w=0&k=20&c=VLS-Bl1dKZ2yGusY32T1pRX5gNSiXUktz4JS9r84zsA="
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/1514458277/photo/mother-and-child-using-laptop-together-outdoor-in-park.jpg?s=612x612&w=0&k=20&c=kDAYRaaUIenLBbBlBc86QSuYHPLLA6uTh0L5K9upO6g="
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/931057120/photo/pictures-of-diverse-faces-and-people-in-india-representing-the-daily-life-in-the-region-of.jpg?s=612x612&w=0&k=20&c=Wk0FSQ_FX17memu-2saIdELx3Qq_d_iV3azoS0Yczj4="
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/1502970309/photo/indian-kids-reading-book-together-rural-village.jpg?s=612x612&w=0&k=20&c=-wkhvpRHfok8HhaeSHM9h8TYkhrirCnaTv_XJGhdRmo="
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/1527412618/photo/elementary-age-school-children-using-laptop-outdoor-in-nature.jpg?s=612x612&w=0&k=20&c=DyA_Wd6CkCuIPBarO-Rz8rZHQ6-oeoI5B8vRV2eI-TI="
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={food} alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/931057200/photo/pictures-of-diverse-faces-and-people-in-india-representing-the-daily-life-in-the-region-of.jpg?s=612x612&w=0&k=20&c=DABOFg5e5NtT3yQW_MoBAJFtXh_U1XC69odqMFwE6Rs="
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://media.gettyimages.com/id/641949746/photo/preparation-for-exam.jpg?s=612x612&w=0&k=20&c=52gARG51f2EB7eSzWLq2IQoo25sUcjCodND8BBMsGbw="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
