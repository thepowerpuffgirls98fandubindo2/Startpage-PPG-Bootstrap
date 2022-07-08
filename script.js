///////
    $(".randbg").RandBG({ClassPrefix: "bg",count: 31});
		//$(".randbg").RandBG();

function RandManual() {
  var element1 = document.getElementById("this1");
  //var index = Math.ceil(Math.random() * 31 * 31) % 31;
  //element1.classList.remove("bg" + index);
  element1.classList.remove('bg0','bg1','bg2','bg3','bg4','bg5','bg6','bg7','bg8','bg9','bg10',
							'bg11','bg12','bg13','bg14','bg15','bg16','bg17','bg18','bg19','bg20',
							'bg21','bg22','bg23','bg24','bg25','bg26','bg27','bg28','bg29','bg30',
							'bg31','bg32','bg33','bg34','bg35','bg36','bg37','bg38','bg39','bg40');
  $(".randbg").RandBG({ClassPrefix: "bg",count: 31});
}
