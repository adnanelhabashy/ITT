import { Component,OnInit,AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TruckData } from '../../providers/truck-data/truck-data';
import { MyApp } from '../../app/app.component';

declare var anime:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit,AfterViewInit {

  TruckList:any=[];
  DefaultTruck:any= new Object();  
  ChasisTypes:any=[];
  ChasisWeights:any=[];
  trailer:any="";

  constructor(public navCtrl: NavController,public truckData:TruckData) {
    this.TruckList = new Array();
    this.DefaultTruck = new Object();
  }

  ngOnInit()
  {  
   
    this.truckData.getTruckList().subscribe(data=>{
      this.TruckList = data;
      this.truckData.getDefaultTruck().subscribe(def=>{
        this.DefaultTruck = this.TruckList.find(x=>x.truckID == def +"");        
      })

    });

    
  }

  ngAfterViewInit(){
    var jobs:any = document.querySelectorAll('.jobs .job');

    jobs.forEach(function (element) {
      element.addEventListener('swiped-left', function (e) {
        anime({
          targets: this,
          translateX: '-350px',
          rotate: '-30deg',
          duration: 300,
          opacity: 0,
          complete: function (anim) {
            var object = anim.animatables[0].target;
            anime({
              targets: object.parentNode,
              height: 0,
              opacity: 0,
              duration: 300,
              easing: 'easeInQuad',
              complete: function (anim) {
                var object = anim.animatables[0].target;
                object.parentNode.removeChild(object);
              }
            });
          }
        });
        this.parentNode.querySelector('.reject').classList.toggle('invisible');
      });
      element.addEventListener('swiped-right', function (e) {
        anime({
          targets: this,
          translateX: '350px',
          rotate: '30deg',
          duration: 300,
          opacity: 0,
          complete: function (anim) {
            var object = anim.animatables[0].target;
            anime({
              targets: object.parentNode,
              height: 0,
              opacity: 0,
              duration: 300,
              easing: 'easeInQuad',
              complete: function (anim) {
                var object = anim.animatables[0].target;
                object.parentNode.removeChild(object);
              }
            });
          }
        });
        this.parentNode.querySelector('.accept').classList.toggle('invisible');
      });
    });

    var modaltrailer = document.querySelector('.my-modal-trailer');
    var modalContenttrailer = modaltrailer.querySelector('.my-modal-content-trailer');

    modalContenttrailer.addEventListener('swiped-down', function(e) {
      myModalDowntrailer();
  });

  modalContenttrailer.querySelector('.my-slider').addEventListener('click', function(e) {
      myModalDowntrailer();
  });
    
    var modal = document.querySelector('.my-modal');
    var modalContent = modal.querySelector('.my-modal-content');    

    modalContent.addEventListener('swiped-down', function (e) {
      myModalDown();
    });

    modalContent.querySelector('.my-slider').addEventListener('click', function (e) {
      myModalDown();
    });    
  }

  navAddTruck()
  {
    myModalDown();
    //this.router.navigateByUrl(`/add-truck`);
  }

  setDefaultTruck(ID)
  {
    this.truckData.setDefaultTruck({TruckID:ID}).subscribe(res=>{
      this.ngOnInit();
      myModalDown();
    })
  }

  btnTruckClick()
  {
    var appPage = document.querySelector('.app-page');
    var modal = document.querySelector('.my-modal');
    var modalContent = modal.querySelector('.my-modal-content');
    appPage.classList.toggle('blur-filter');
      modal.classList.toggle('d-none');
      anime({
        targets: modalContent,
        translateY: '0',
        duration: 300,
        easing: 'easeOutQuad'
      });
  }

  btnTrailerClick()
  {
    this.ChasisTypes = MyApp.data.ChasisTypes;
    this.ChasisWeights = MyApp.data.ChasisWeights;
    var appPage = document.querySelector('.app-page');
    var modal = document.querySelector('.my-modal-trailer');
    var modalContent = modal.querySelector('.my-modal-content-trailer');
    appPage.classList.toggle('blur-filter');
            modal.classList.toggle('d-none');
            anime({
                targets: modalContent,
                translateY: '0',
                duration: 300,
                easing: 'easeOutQuad'
            });
  }

  setTrailer()
  {
    var chassistype:any = document.getElementById("chassis-type");
    var chassistypeval = chassistype.options[chassistype.selectedIndex].value;

    var chassisweight:any = document.getElementById("chassis-weight");
    var chassisweightval = chassisweight.options[chassisweight.selectedIndex].value;


    this.trailer = chassistypeval + " " + chassisweightval; 
    myModalDowntrailer();
  }


}

function myModalDown() {
  var appPage = document.querySelector('.app-page');
  var modal = document.querySelector('.my-modal');
  var modalContent = modal.querySelector('.my-modal-content');
  

  appPage.classList.toggle('blur-filter');
  anime({
    targets: modalContent,
    translateY: '100%',
    duration: 300,
    easing: 'easeInQuad',
    complete: function () {
      modal.classList.toggle('d-none');
    }
  });
}

function myModalDowntrailer() {
  var appPage = document.querySelector('.app-page');
  var modal = document.querySelector('.my-modal-trailer');
  var modalContent = modal.querySelector('.my-modal-content-trailer');
  appPage.classList.toggle('blur-filter');
  anime({
      targets: modalContent,
      translateY: '100%',
      duration: 300,
      easing: 'easeInQuad',
      complete: function() {
          modal.classList.toggle('d-none');
      }
  });
}

