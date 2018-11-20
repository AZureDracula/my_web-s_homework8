var hao     =  document.getElementsByClassName("hao");
function deleted(data){
			
	var fa=data.parentNode;
	fa.parentNode.removeChild(fa);
	
	for(i=1;i<=hao.length;i++){
			hao[i].innerHTML=i;
		}

		
		
}
function upload(){
		
		var name    =  document.getElementById("input_1").value;
		var sex     =  document.getElementById("input_2").value;
		var tr      =  document.getElementsByTagName("tr");
		
		var table   =  document.getElementById("output_table");
		var tbody   =  document.getElementsByTagName("tbody");
		
	
			
		var ctr     = document.createElement("tr");
		var ctd1     = document.createElement("td");
		var ctd2     = document.createElement("td");
		var ctd3     = document.createElement("td");
		var ctd4     = document.createElement("td");
		
		
		tbody[0].appendChild(ctr);
		if(tr.length%2  == 0)
		ctr.setAttribute("class","trtr1");
		if(tr.length%2 !=  0)
		ctr.setAttribute("class","trtr2");
		
		
		
		ctr.appendChild(ctd1);
		ctd1.setAttribute("class","hao");
		
		
		
		ctr.appendChild(ctd2);
		ctd2.setAttribute("class","name");
		ctd2.innerHTML=name;
		
		
		ctr.appendChild(ctd3);
		ctd3.setAttribute("class","sex");
		ctd3.innerHTML=sex;
		
		
		ctr.appendChild(ctd4);
		ctd4.setAttribute("class","dellet");
		ctd4.setAttribute("onclick","deleted(this)");
		ctd4.innerHTML="删除";

		
		
		for(i=1;i<=hao.length;i++){
			hao[i].innerHTML=i;
		}
		
	}
