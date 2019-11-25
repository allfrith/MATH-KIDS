function resultado() {
				var p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, nota;
				<!-- 21ª pregunta -->
				var text1 = document.getElementById("Q1").value;
				if(text1=="1347"){p21=1}
				else {p21=0}
				<!-- 22ª pregunta -->
				var text2 = document.getElementById("Q2").value;
				if(text2=="425"){p22=1}
				else {p22=0}
				<!-- 23ª pregunta -->
				var text3 = document.getElementById("Q3").value;
				if(text3=="1434"){p23=1}
				else {p23=0}
				<!-- 24ª pregunta -->
				var text4 = document.getElementById("Q4").value;
				if(text4=="396"){p24=1}
				else {p24=0}
				<!-- 25ª pregunta -->
				var text5 = document.getElementById("Q5").value;
				if(text5=="2092"){p25=1}
				else {p25=0}
				<!-- 26ª pregunta -->
				var text6 = document.getElementById("Q6").value;
				if(text6=="252"){p26=1}
				else {p26=0}
				<!-- 27ª pregunta -->
				var text7 = document.getElementById("Q7").value;
				if(text7=="1332"){p27=1}
				else {p27=0}
				<!-- 28ª pregunta -->
				var text8 = document.getElementById("Q8").value;
				if(text8=="1962"){p28=1}
				else {p28=0}
				<!-- 29ª pregunta -->
				var text9 = document.getElementById("Q9").value;
				if(text9=="1368"){p29=1}
				else {p29=0}
				<!-- 30ª pregunta -->
				var text10 = document.getElementById("Q10").value;
				if(text10=="2994"){p30=1}
				else {p30=0}
				nota=p21+p22+p23+p24+p25+p26+p27+p28+p29+p30;
				alert(" Aciertos: " + nota);
				location.reload();
			}