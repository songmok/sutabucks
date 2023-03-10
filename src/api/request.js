const requests = {
  // 메뉴
  fetchList: "admin/list",
  fetchMenu: "menu/list",
  fetchMenuSearch: "menu/search",
  fetchCateSearch: "cate/searchmenu",
  fetchCateSeq: "cate/detail",
  fetchChildCate: "cate/detail/menu",
  fetchMenuDetail: "menu/list/detail",
  fetchStoreMenu: "store/cart/menu/list",
  fetchStoreMenuDetail: "store/cart/menu/list/detail",
  //새소식
  fetchEvent: "admin/eventlist",
  fetchEventDetail: "admin/event",
  fetchNotice: "admin/noticelist",
  fetchNoticeDetail: "admin/notice",
  //가게정보
  fetchMyStoreInfo: "store/search",
  fetchMyStoreMenu: "store/menu/list",
};
export default requests;
