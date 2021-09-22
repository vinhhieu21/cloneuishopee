const data = [
    {
        key: 1,
        index: 1,
        text: "Thời Gian",
        icon: "https://cdn0.iconfinder.com/data/icons/line-action-bar/48/copy-512.png",
        width: 20,
        height: 20,
    },
    {
        key: 2,
        index: 2,
        text: "Khám Phá",
        icon: "https://cdn1.iconfinder.com/data/icons/ui-colored-3-of-3/100/UI_3__23-512.png",
        width: 20,
        height: 20,
    },
    {
        key: 3,
        index: 3,
        text: "Shopee...",
        icon: "https://shopee.vn/blog/wp-content/uploads/2019/03/Shopee-logo-EN-1200x630.png",
        width: 50,
        height: 20,
    },
    {
        key: 4,
        index: 4,
        text: "Thời Trang",
        icon: "data:image/jpeg;base64,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",
        width: 20,
        height: 20,
    },
    {
        key: 5,
        index: 5,
        text: "Làm Đẹp",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4bo4vVHW_bnvMuXWX4L7-7K1i3HkJtFPjcjZPoCgO3Rf8aXYG&usqp=CAU",
        width: 20,
        height: 20,
    },
    {
        key: 6,
        index: 6,
        text: "Sống Chất",
        icon: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-three-stars-png-image_4168345.jpg",
        width: 20,
        height: 20,
    },
    {
        key: 7,
        index: 7,
        text: "Mua Ngay",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSShNh7_PZbfH7duxD9ZVwwQbV2pghJcwh7q1xcdumeCgUiRTI1&usqp=CAU",
        width: 50,
        height: 20,
    },
]

export default data