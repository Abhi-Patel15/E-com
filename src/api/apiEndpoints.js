export const GET_LOGIN = "api/admin/login";

// Dashoard
export const GET_CARD_COUNOFDATA = "api/admin/dashBoard/countOfData";
export const GET_GRAPH_GRAPHOFDATA = "api/admin/dashBoard/graphOfCustomer";
export const GET_REGISTRATIONDATA ="api/admin/dashBoard/recentlyRegistration";
export const GET_TABAL_LISTOFORDER = "api/admin/dashBoard/listOfOrder";

//category
export const POST_CATEGORY_LIST = "api/category/addCategory";
export const POST_LISTOFCATEGORY = "api/category/listOfCategory";
export const PUT_EDIT_CATEGORY = "api/category/editCategory";
export const DELETE_CATEGORY = "api/category/deleteCategory";

//product
export const POST_ADDPRODUCT = "users";
export const POST_VIEWPRODUCT ="users";
export const PUT_EDITPRODUCT = "users";
export const DELETE_DELETEPROUDUCT = "users";
export const PUT_PRODUCTIMAGE ="api/vendor/productImage/:id";

// BANNER 
export const POST_LISTOFBNNER = "api/banner/listOfBanner";
export const POST_ADDBANNER ="api/banner/addBanner";
export const PUT_EDITBANNER = "api/banner/editBanner/:id";
export const DELETE_DELETEBANNER = "api/banner/deleteBanner/:id";

// vendor 
export const POST_REGISTRATION = "api/vendor/registration'";
export const GET_VENDORPENDINGLIST = "api/vendor/vendorPendingList";
export const GET_ORDERLIST ="api/vendor/orderList";
export const GET_LISTOFVENDOR = "api/vendor/listOfVendor"

// FORGET PASSWORD
export const POST_VERIFYEMAIL = "api/vendor/verifyEmail'";
export const POST_VERIFYOTP = "api/vendor/verifyOtp'";
export const PUT_RESETPASSWORD ="api/vendor/resetPassword/:id'";

//CHANGE PASSWORD
export const PUT_UPDATEPASSWORD ="api/vendor/updatePassword'";

//profile
export const PUT_EDITPROFILE = "api/vendor/editProfile/:id'";
export const GET_VIEWPROFILE = "api/vendor/viewProfile/:id/:role'";