// <--Nav-bar Behavior change-->

const header = document.getElementById('nav-bar');
const sectionOne = document.getElementById('homeSection');
const navbg = document.getElementById('res_ul');

const sectionOneOptions = {
    rootMargin : "-180px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver){
    entries.forEach(e =>{
        if(!e.isIntersecting){
            header.classList.add('nav-bar-scrolled');
            navbg.classList.add('bg-for-nav');

        }else{
            header.classList.remove('nav-bar-scrolled');
            navbg.classList.remove('bg-for-nav');
        }
    });
},sectionOneOptions);

sectionOneObserver.observe(sectionOne)


// <--Services reveal system-->

const ser_btn_1 =document.getElementById('service_btn_1');

ser_btn_1.addEventListener("click",()=>{
    const service = document.getElementById('service_part_1');
    if(service.classList.contains("hide")){
        service.classList.replace("hide","show");
        ser_btn_1.textContent = "Hide Products";
    }
    else{
        if(service.classList.contains("show")){
            service.classList.replace("show","hide");
            ser_btn_1.textContent = "Show Products";
        }
    }
});

const ser_btn_2 =document.getElementById('service_btn_2');

ser_btn_2.addEventListener("click",()=>{
    const service = document.getElementById('service_part_2');
    if(service.classList.contains("hide")){
        service.classList.replace("hide","show");
        ser_btn_2.textContent = "Hide Products";
    }
    else{
        if(service.classList.contains("show")){
            service.classList.replace("show","hide");
            ser_btn_2.textContent = "Show Products";
        }
    }
});

const ser_btn_3 =document.getElementById('service_btn_3');

ser_btn_3.addEventListener("click",()=>{
    const service = document.getElementById('service_part_3');
    if(service.classList.contains("hide")){
        service.classList.replace("hide","show");
        ser_btn_3.textContent = "Hide Products";
    }
    else{
        if(service.classList.contains("show")){
            service.classList.replace("show","hide");
            ser_btn_3.textContent = "Show Products";
        }
    }
});

const ser_btn_4 =document.getElementById('service_btn_4');

ser_btn_4.addEventListener("click",()=>{
    const service = document.getElementById('service_part_4');
    if(service.classList.contains("hide")){
        service.classList.replace("hide","show");
        ser_btn_4.textContent = "Hide Products";
    }
    else{
        if(service.classList.contains("show")){
            service.classList.replace("show","hide");
            ser_btn_4.textContent = "Show Products";
        }
    }
});


// <--FaQ reveal system-->


const faq_btn_1 =document.getElementById('faq_rev_btn_1');

faq_btn_1.addEventListener("click",()=>{
    const service = document.getElementById('faq-ans-1');
    if(service.classList.contains("hide")){
        service.classList.replace("hide","show");
        faq_btn_1.textContent = "-";
    }
    else{
        if(service.classList.contains("show")){
            service.classList.replace("show","hide");
            faq_btn_1.textContent = "+";
        }
    }
});

const faq_btn_2 =document.getElementById('faq_rev_btn_2');

faq_btn_2.addEventListener("click",()=>{
    const service = document.getElementById('faq-ans-2');
    if(service.classList.contains("hide")){
        service.classList.replace("hide","show");
        faq_btn_2.textContent = "-";
    }
    else{
        if(service.classList.contains("show")){
            service.classList.replace("show","hide");
            faq_btn_2.textContent = "+";
        }
    }
});

const faq_btn_3 =document.getElementById('faq_rev_btn_3');

faq_btn_3.addEventListener("click",()=>{
    const service = document.getElementById('faq-ans-3');
    if(service.classList.contains("hide")){
        service.classList.replace("hide","show");
        faq_btn_3.textContent = "-";
    }
    else{
        if(service.classList.contains("show")){
            service.classList.replace("show","hide");
            faq_btn_3.textContent = "+";
        }
    }
});

// Navigation dispplay system

const menu_btn = document.getElementById('menu-icon');

menu_btn.addEventListener('click',()=>{
    const service = document.getElementById('res_ul');
    if(!service.classList.contains('activate_ul')){
        service.classList.add('activate_ul');
    }
    else{
        service.classList.remove('activate_ul');
    }
});


// <--Opening LinkedIn pages-->

const linkbtn = document.getElementById('linkedin_target');

linkbtn.onclick = function(){
    window.open("https://www.linkedin.com/in/pugazhendhi-siva/",'_blank');
    window.open("https://www.linkedin.com/in/asvithasivabalan2105/",'_blank'); 
}