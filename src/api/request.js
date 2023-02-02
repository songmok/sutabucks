const requests = {
  // 메뉴
  fetchList: "admin/list",
  fetchMenu: "menu/list",
  fetchMenuSearch: "menu/search",
  fetchCateSearch: "cate/searchmenu",
  fetchCateSeq: "cate/detail",
  fetchMenuDetail: "menu/list/detail",
  fetchStoreMenu: "store/cart/menu/list",
  fetchStoreMenuDetail: "store/cart/menu/list/detail",
  //새소식
  fetchEvent: "admin/eventlist",
  fetchEventDetail: "admin/eventdetail",
  fetchNotice: "admin/noticelist",
  fetchNoticeDetail: "admin/noticedetail",
  //가게정보
  fetchMyStoreInfo: "store/search",
  fetchMyStoreMenu: "store/menu/list",
};
export default requests;
