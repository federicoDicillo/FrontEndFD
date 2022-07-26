export class persona{
    id?: number;
    name: String;
    lastname: String;
    imgProfile: String;
    imgBanner: String;
    tituloPer: String;
    email: String;
    phone: String;

    constructor(name:String, lastname:String, imgBanner:String, imgProfile:String, tituloPer:String, email: String, phone:String){
        this.name = name;
        this.lastname = lastname;
        this.imgProfile = imgProfile;
        this.imgBanner = imgBanner;
        this.tituloPer = tituloPer;
        this.email = email;
        this.phone = phone;
    }
}