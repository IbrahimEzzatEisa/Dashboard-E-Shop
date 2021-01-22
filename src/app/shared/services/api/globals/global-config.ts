
export const BaseURL = "http://eshop5827-001-site3.etempurl.com";
export const API_URL = BaseURL + '/api/Account';

export const API_URL_Yaboos = BaseURL + '/api';


export class END_POINTS {
    // yaboos  API
    public static login = API_URL + "/login";
    //post user
    public static users = API_URL + "/register";
    // get All user
    public static GetAllUser = API_URL + "/admin/getAllUser";
    // update user
    public static updateUser = API_URL + "/admin/update";


        // ContactUs
        public static getProblems = API_URL_Yaboos +"/ContactUs/admin/getAll";
        public static deleteProblems = API_URL_Yaboos + '/ContactUs/admin/delete';
    

    // about
    public static createAbout = API_URL_Yaboos + "/About/admin/create";
    public static getAbout = API_URL_Yaboos + "/About/Get";
    public static updateAbout = API_URL_Yaboos + '/About/admin/update';
    public static DeleteAbout = API_URL_Yaboos + '/About/admin/delete';

    // city
    public static createCity = API_URL_Yaboos + "/City/admin/create";
    public static getAllCity = API_URL_Yaboos + "/City/GetAll";
    public static updateCity = API_URL_Yaboos + '/City/admin/update';
    public static DeleteCity = API_URL_Yaboos + '/City/admin/delete';


    // Category / /api/Category/GetAll
    public static CategoryGetAll = API_URL_Yaboos + "/Category/GetAll";
    public static createCategory = API_URL_Yaboos + "/Category/admin/create";
    public static CategoryUpadte = API_URL_Yaboos + '/Category/admin/update';
    public static CategoryDelete = API_URL_Yaboos + '/Category/admin/delete';


    //Delivery
    public static DeliveryGetAll = API_URL_Yaboos + "/Delivery/GetAll";
    public static createDelivery = API_URL_Yaboos + "/Delivery/admin/create";
    public static DeliveryUpadte = API_URL_Yaboos + "/Delivery/admin/update";
    public static DeliveryDelete = API_URL_Yaboos + '/Delivery/admin/delete';

    ///api/Notification/GetAll
    public static NotificationGetAll = API_URL_Yaboos + "/Notification/GetAll";
    public static createNotification = API_URL_Yaboos + "/Notification/admin/create";
    public static NotificationUpadte = API_URL_Yaboos + "/Notification/admin/update";
    public static NotificationDelete = API_URL_Yaboos + "/Notification/admin​/delete​";

    //Product
    public static ProductGetAll = API_URL_Yaboos + "/Product/GetAll";
    public static Productcreate = API_URL_Yaboos + "/Product/admin/create";
    public static ProductUpadte = API_URL_Yaboos + "/Product/admin/update";
    public static ProductDelete = API_URL_Yaboos + '/Product/admin/delete';
    public static ProductByID = API_URL_Yaboos +'/Product/admin/getById';



    ///api/Supplier/admin/create
    public static SupplierGetAll = API_URL_Yaboos + "/Supplier/GetAll";
    public static Suppliercreate = API_URL_Yaboos + "/Supplier/admin/create";
    public static SuppliertUpadte = API_URL_Yaboos + "/Supplier/admin/update";
    public static SuppliertDelete = API_URL_Yaboos + '/Supplier/admin/delete';
    // public static SupplierByID = API_URL_Yaboos+"/Supplier/admin​/getById";
    public static SupplierByID = API_URL_Yaboos + '/Supplier/admin/getById';



    public static albumCategories = API_URL_Yaboos + "/albumCategories/admin";
    public static albums = API_URL_Yaboos + "/albums/admin";
    public static languages = API_URL_Yaboos + "/languages/admin";
    public static songs = API_URL_Yaboos + "/songs/admin";
    public static artists = API_URL_Yaboos + "/artists/admin";

    public static passwordreset = API_URL + "/passwordreset";

    public static notification = API_URL_Yaboos + "/notifications/admin/pushToAll";
    public static annonce = API_URL_Yaboos + "/advertisements/admin";



    public static order = API_URL_Yaboos + "/Order/GetByUser";

    
    //pharma/api/Pharmacy/GetAll
    public static PharmacyGetAll = API_URL_Yaboos + "/Pharmacy/GetAll";
    public static PharmacyDelete = API_URL_Yaboos + '/Pharmacy/admin/delete';


        //image
        public static ImageGetAll = API_URL_Yaboos + "/Image/GetAll";
        public static ImageDelete = API_URL_Yaboos + '/Image/admin/delete';
        public static ImageUpdate= API_URL_Yaboos + '/Image/admin/update';
        public static ImageCreate= API_URL_Yaboos + '/Image/admin/create';

}


