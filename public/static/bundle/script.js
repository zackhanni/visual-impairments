(()=>{"use strict";var e;e=document.querySelector("#cards"),[{impairment:"Glaucoma",about:"Glaucoma is a group of diseases that can damage the eyes optic nerve and result in vision loss and blindness. Glaucoma occurs when the normal fluid pressure inside the eyes slowly rises. However, recent findings now show that glaucoma can occur with normal eye pressure. With early treatment, you can often protect your eyes against serious vision loss.",about2:"There are two major categories “open angle” and “closed angle” glaucoma. Open angle, is a chronic condition that progress slowly over long period of time without the person noticing vision loss until the disease is very advanced, that is why it is called “sneak thief of sight.” Angle closure can appear suddenly and is painful. Visual loss can progress quickly; however, the pain and discomfort lead patients to seek medical attention before permanent damage occurs.",website:"https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma",demo:"./glaucoma.html"},{impairment:"Macular Degeneration",about:"Macular degeneration, often called age-related macular degeneration (AMD), is an eye disorder associated with aging and results in damaging sharp and central vision. Central vision is needed for seeing objects clearly and for common daily tasks such as reading and driving. AMD affects the macula, the central part the retina that allows the eye to see fine details. There are two forms of AMD—wet and dry.",about2:"Wet AMD is when abnormal blood vessel behind the retina start to grow under the macula, ultimately leading to blood and fluid leakage. Bleeding, leaking, and scarring from these blood vessels cause damage and lead to rapid central vision loss. An early symptom of wet AMD is that straight lines appear wavy. Dry AMD is when the macula thins overtime as part of aging process, gradually blurring central vision. The dry form is more common and accounts for 70–90% of cases of AMD and it progresses more slowly than the wet form. Over time, as less of the macula functions, central vision is gradually lost in the affected eye. Dry AMD generally affects both eyes. One of the most common early signs of dry AMD is drusen.",website:"https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/age-related-macular-degeneration",demo:"glaucoma"},{impairment:"Cateract",about:"Cataract is a clouding of the eye’s lens and is the leading cause of blindness worldwide, and the leading cause of vision loss in the United States. Cataracts can occur at any age because of a variety of causes, and can be present at birth. Although treatment for the removal of cataract is widely available, access barriers such as insurance coverage, treatment costs, patient choice, or lack of awareness prevent many people from receiving the proper treatment",about2:"",website:"https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts",demo:"glaucoma"},{impairment:"Diabetic Retinopathy",about:"Diabetic retinopathy (DR) is a common complication of diabetes. It is the leading cause of blindness in American adults. It is characterized by progressive damage to the blood vessels of the retina, the light-sensitive tissue at the back of the eye that is necessary for good vision. DR progresses through four stages, mild nonproliferative retinopathy (microaneurysms), moderate nonproliferative retinopathy (blockage in some retinal vessels), severe nonproliferative retinopathy (more vessels are blocked leading to deprived retina from blood supply leading to growing new blood vessels), and proliferative retinopathy (most advanced stage). Diabetic retinopathy usually affects both eyes.",about2:"",website:"https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/diabetic-retinopathy",demo:"glaucoma"}].forEach((function(a){var t=document.createElement("div");t.id="card",t.classList.add("card");var n=document.createElement("div");n.classList.add("card-title");var o=document.createElement("h2");o.innerText=a.impairment;var i=document.createElement("button");i.id="btn",i.classList.add("btn"),i.innerText="Try it out",i.onclick=function(){var e=a.demo;window.location.href=e},n.appendChild(o),n.appendChild(i);var s=document.createElement("div");s.id="about",s.classList.add("card-body");var r=document.createElement("p");r.innerText=a.about;var d=document.createElement("a");d.href=a.website,d.innerText="Learn more about ".concat(a.impairment),s.appendChild(r),s.appendChild(d),t.appendChild(n),t.appendChild(s),null==e||e.appendChild(t)})),window.addEventListener("load",(function(){var e=document.querySelector(".spotlight"),a="transparent 20%, rgba(0, 0, 0, 0.7) 30%";function t(t){e.style.backgroundImage="radial-gradient(circle at ".concat(t.pageX/window.innerWidth*100,"% ").concat(t.pageY/window.innerHeight*100,"%, ").concat(a)}window.addEventListener("mousemove",(function(e){return t(e)})),window.addEventListener("mousedown",(function(e){a="transparent 10%, rgba(0, 0, 0, 0.9) 25%",t(e)})),window.addEventListener("mouseup",(function(e){a="transparent 20%, rgba(0, 0, 0, 0.7) 30%",t(e)}))}))})();