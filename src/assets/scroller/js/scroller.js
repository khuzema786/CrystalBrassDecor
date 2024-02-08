function marqueeScrowller(){ // Brand Scroller - crawler.js
	marqueeInit({
		uniqueid: 'mycrawler2',
		style: {
			'padding': '0px',   // 2px
			'width': '100%',  // 900px  100%
			'height': '225px'  // 180px
		},
		inc: 7, //speed - pixel increment for each iteration of this marquee's movement
		mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
		moveatleast: 2,
		neutral: 150,
		savedirection: true,
		random:false
	});
}
