!function(){function t(t){return Math.floor(255*Math.random()+t)}function r(t,i,r){return"rgba("+t+","+i+","+r+", 0.8)"}function o(t,i,r,o){return(t*i+r*o)/(i+o)}function e(t,i){var e=t.color,a=i.color,n=o(e.r,t.radius,a.r,i.radius),d=o(e.g,t.radius,a.g,i.radius),h=o(e.b,t.radius,a.b,i.radius);return r(Math.floor(n),Math.floor(d),Math.floor(h))}function a(i){i=i||0,this.r=t(i),this.g=t(i),this.b=t(i),this.style=r(this.r,this.g,this.b),this.dimmerStyle=r(this.r-20,this.g-20,this.b-20),this.brighterStyle=r(this.r+20,this.g+20,this.b+20)}function n(){this.x=Math.random()*c.width,this.y=Math.random()*c.height,this.vx=-1.5+Math.random(),this.vy=-.5+Math.random(),this.radius=3*Math.random(),this.color=new a}function d(){for(i=0;i<w.nb;i++){var t=w.array[i];t.y<0||t.y>c.height?(t.vx=t.vx,t.vy=-t.vy):(t.x<0||t.x>c.width)&&(t.vx=-t.vx,t.vy=t.vy),t.x+=t.vx,t.y+=t.vy}}function h(){var t=0;for(i=0;i<w.nb;i++)for(j=0;j<w.nb;j++)if(i_dot=w.array[i],j_dot=w.array[j],i_dot.x-j_dot.x<w.distance&&i_dot.y-j_dot.y<w.distance&&i_dot.x-j_dot.x>-w.distance&&i_dot.y-j_dot.y>-w.distance&&i_dot.x-v.x<w.d_radius&&i_dot.y-v.y<w.d_radius&&i_dot.x-v.x>-w.d_radius&&i_dot.y-v.y>-w.d_radius&&(l.beginPath(),l.strokeStyle=e(i_dot,j_dot),l.moveTo(i_dot.x,i_dot.y),l.lineTo(j_dot.x,j_dot.y),l.stroke(),l.closePath(),w.array[i].drawBold(),w.array[j].drawBold(),t++),t>_)return}function s(){for(i=0;i<w.nb;i++)w.array[i].draw()}function y(){l.clearRect(0,0,c.width,c.height),1==M?++_>w.nbMax-2&&(M=3,g=0):2==M?--_<25&&(M=4,g=0):3==M?++g>15&&(g=0,M=2):4==M&&++g>150&&(g=0,M=1),v.y<0||v.y>c.height?v.vy=-v.vy:(v.x<0||v.x>c.width)&&(v.vx=-v.vx),v.x+=v.vx,v.y+=v.vy,d(),s(),h();var t=1e3/((f=new Date)-P);f!=P&&(P=f,(b+=(t-b)/I)<m&&(F=((m=b)+S)/2),b>S&&(F=(m+(S=b))/2)),requestAnimationFrame(y)}function u(){document.querySelector("#FPS").innerHTML="FPS:"+b.toFixed(2)+", MAX:"+S.toFixed(2)+", MIN:"+m.toFixed(2)+", MEAN:"+F.toFixed(2)+", MC:"+_.toFixed(0),k++>15&&(m=b,S=b,k=0)}function x(){var t=document.querySelector("canvas");t.width=window.innerWidth,t.height=window.innerHeight}var c=document.querySelector("canvas"),l=c.getContext("2d");c.width=window.innerWidth,c.height=window.innerHeight,l.lineWidth=.3,l.strokeStyle=new a(150).style;var v={x:30*c.width/100,y:30*c.height/100,vx:1.5,vy:1.5},w={nb:(c.width/5).toFixed(1),nbMax:(c.width/5).toFixed(1),distance:(c.width/8).toFixed(1),d_radius:150,array:[]};n.prototype={draw:function(){l.beginPath(),l.fillStyle=this.color.dimmerStyle,l.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),l.fill()},drawBold:function(){l.beginPath(),l.fillStyle=this.color.style,l.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),l.fill(),l.strokeStyle=this.color.brighterStyle,l.arc(this.x,this.y,this.radius+1,0,2*Math.PI,!1),l.arc(this.x,this.y,this.radius+2,0,2*Math.PI,!1),l.arc(this.x,this.y,this.radius+3,0,2*Math.PI,!1),l.stroke(),l.closePath()}};var f,_=(w.nbMax/2).toFixed(1),g=0,M=1,b=0,m=1e4,S=0,F=0,P=1*new Date,I=50;!function(){for(i=0;i<w.nb;i++)w.array.push(new n)}(),window.addEventListener("resize",x,!1),window.addEventListener("orientationchange",x,!1),window.setInterval(u,1e3);var k=0;requestAnimationFrame(y),u()}();
