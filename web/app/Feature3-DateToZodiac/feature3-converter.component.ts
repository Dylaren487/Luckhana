import {Component} from "@angular/core";

@Component({
  selector: 'F3Converter',
  templateUrl: 'feature3-converter.component.html',
  styleUrls: ['feature3-converter.component.css']
})

export class f3Converter {
  inputDate: string;
  output: string;
  showOutput: boolean = false;

  calculateZodiac() {
    if(this.inputDate==null){
      this.output = "Null date"
    }else{
      let month : number = +this.inputDate.substring(5,7);
      let day : number = +this.inputDate.substring(8);
      if(month==1){
        if(day>12){
          this.output=="Capricorn";
        }else{
          this.output=="Sagittarius";
        }
      }else if(month==2){
        if(day>12){
          this.output=="Aquarius";
        }else{
          this.output=="Capricorn";
        }
      }else if(month==3){
        if(day>12){
          this.output=="Pisces";
        }else{
          this.output=="Aquarius";
        }
      }else if(month==4){
        if(day>12){
          this.output=="Aries";
        }else{
          this.output=="Pisces";
        }
      }else if(month==5){
        if(day>12){
          this.output=="Taurus";
        }else{
          this.output=="Aries";
        }
      }else if(month==6){
        if(day>12){
          this.output=="Gemini";
        }else{
          this.output=="Taurus";
        }
      }else if(month==7){
        if(day>12){
          this.output=="Cancer";
        }else{
          this.output=="Gemini";
        }
      }else if(month==8){
        if(day>12){
          this.output=="Leo";
        }else{
          this.output=="Cancer";
        }
      }else if(month==9){
        if(day>12){
          this.output=="Virgo";
        }else{
          this.output=="Leo";
        }
      }else if(month==10){
        if(day>12){
          this.output=="Libra";
        }else{
          this.output=="Virgo";
        }
      }else if(month==11){
        if(day>12){
          this.output=="Scorpio";
        }else{
          this.output=="Libra";
        }
      }else if(month==12){
        if(day>12){
          this.output=="Sagittarius";
        }else{
          this.output=="Scorpio";
        }
      }
      this.showOutput = true;
    }
  }
}
