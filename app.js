"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var q4=Math.imul;var q5=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function rs(p){var b=null;if(typeof self==='object')b=fetch(p).then(r=>r.arrayBuffer());else if(typeof require==='function'){p=require('path').join(__dirname, p);b=new Promise((y,n)=>{require('fs').readFile(p,(e,d)=>{if(e)n(e);else y(d);});});}else b=new Promise((y,n)=>{y(read(p,'binary'));});return b;}function qL(q,o,m){var j=null,g=0,k=0,i=null;j=aS();i=-16+j|0;av(i);g=i|0;qf(g,q,o,m);i=a;k=c[8+g>>2]|0;i=aL(i,k);aG(g);av(j);return i;}function aL(g,h){var j=null,i=0,k=0;j=String();i=g[h]|0;if((i&255)===0)return String(j);k=0;while(1){j=j.concat(String.fromCharCode(i<<24>>24));k=k+1|0;i=g[h+k|0]|0;if((i&255)!==0)continue;break;}return String(j);}function qB(m,k){var j=null,i=null,g=0;j=aS();i=-16+j|0;av(i);g=i|0;aK(g,m);hs(g,k);aG(g);av(j);}function aK(i,g){var m=null,k=0,j=0;hn(i|0);hm(i|0,g.length);m=a;k=c[8+i>>2]|0;if(((g.length)|0)>0){j=0;while(1){m[k+j|0]=g.charCodeAt(j);j=j+1|0;if((j|0)<((g.length)|0))continue;break;}}}function qA(q,o,m){var k=null,j=null,i=0,g=0;k=aS();j=-32+k|0;av(j);i=16+j|0;aK(i,q);g=j|0;aK(g,o);hk(i,g,m);aG(g);aG(i);av(k);}function qK(m,k){var j=null,i=null,g=0;j=aS();i=-16+j|0;av(i);g=i|0;aK(g,m);kU(g,k);aG(g);av(j);}function qJ(q,o,m,k){var j=null,i=null,g=0;j=aS();i=-16+j|0;av(i);g=i|0;aK(g,q);kP(g,o,m,k);aG(g);av(j);}function qI(u){var s=null,k=0,o=0,r=0,t=0,j=null,g=0,i=0,q=null,m=0;s=aS();j=-72+s|0;av(j);k=56+j|0;kD(k);kC(k,u.length);if(((u.length)|0)!==0){g=40+j|0;i=0;while(1){q=u[0+i|0];aK(g,q);kA(k,g);aG(g);i=i+1|0;if(i>>>0<(u.length)>>>0)continue;break;}}g=16+j|0;kQ(g,k);q=new Array();i=8+j|0;kx(i,g);o=j|0;kw(o);m=c[i>>2]|0;r=c[o>>2]|0;if((m|0)!=(r|0))while(1){j=a;t=c[16+m>>2]|0;q.push(aL(j,t));kq(i)|0;m=c[i>>2]|0;if((m|0)!=(r|0))continue;break;}kv(g);kt(k);av(s);return q;}function qH(o,m,k){var j=null,i=null,g=0;j=aS();i=-16+j|0;av(i);g=i|0;aK(g,o);kp(g,m,k);aG(g);av(j);}function dX(r,q,o,m){var k=null,j=0,i=null,g=null;k=a;j=c[8+r>>2]|0;k=aL(k,j);i=a;j=c[8+q>>2]|0;i=aL(i,j);g=a;j=c[8+o>>2]|0;g=aL(g,j);fillModalAndOpenJ(k,i,g,!!m);}function qG(k){var j=null,i=null,g=0;j=aS();i=-16+j|0;av(i);g=i|0;aK(g,k);kl(g);aG(g);av(j);}function qF(s,r,q,o){var m=null,k=null,j=0,i=0,g=0;m=aS();k=-48+m|0;av(k);j=32+k|0;aK(j,s);i=16+k|0;aK(i,r);g=k|0;aK(g,q);kb(j,i,g,o);aG(g);aG(i);aG(j);av(m);}function qE(s,r,q,o){var m=null,k=null,j=0,i=0,g=0;m=aS();k=-48+m|0;av(k);j=32+k|0;aK(j,s);i=16+k|0;aK(i,r);g=k|0;aK(g,q);j9(j,i,g,o);aG(g);aG(i);aG(j);av(m);}function qD(k){var j=null,i=null,g=0;j=aS();i=-16+j|0;av(i);g=i|0;aK(g,k);j5(g);aG(g);av(j);}function qC(){var k=null,g=0,j=0,m=0,i=null;k=aS();i=-160+k|0;av(i);cj();g=16+i|0;j3(g);j2(8+g|0)|0;j=i|0;j1(j,g);i=a;m=c[8+j>>2]|0;i=aL(i,m);aG(j);dW(g);av(k);return i;}function qv(){cj();cW();}function qu(){cj();gd();}function ck(k,j,i,g){var o=null,q=0,m=null;o=a;q=c[8+k>>2]|0;o=aL(o,q);m=a;q=c[8+j>>2]|0;m=aL(m,q);updateNodeJ(o,m,i,g);}function gx(i){var j=0,g=null;g=a;j=c[8+i>>2]|0;g=aL(g,j);eraseNodeJ(g);}function b0(o,m,k,j,i,g){var u=null,q=0,t=null,s=null,r=null;u=a;q=c[8+o>>2]|0;u=aL(u,q);t=a;q=c[8+m>>2]|0;t=aL(t,q);s=a;q=c[8+k>>2]|0;s=aL(s,q);r=a;q=c[8+j>>2]|0;r=aL(r,q);updateEdgeJ(u,t,s,r,!!i,!!g);}function gu(i){var j=0,g=null;g=a;j=c[8+i>>2]|0;g=aL(g,j);eraseEdgeJ(g);}function fo(m,k,j){var i=null,g=null;g=[0];g[0]=(k|0);i=new Int32Array(2);i[0]=j;i[1]=m;g=fn(i,1,g,0,i,0);fm(g);;}function fn(o,p,m,n,k,l){var s=null,r=0,q=0,j=0,g=null,i=0;j=cx|0;a:{b:{if((j|0)>1){g=b8;i=1;while(1){if((g[i]&255)!==0){i=i+1|0;if((i|0)===(j|0))break b;continue;}break;}}else{i=1;}if((i|0)!==(j|0)){g=b8;j=i;g=g;break a;}}cx=j<<1;g=cy;i=q4(j,96)|0;if(g!==nullArray||0!==0)g=qs(g,g.length,i/48|0);else g=qr(i/48|0);cy=g;i=cx|0;g=b8;if(g!==nullArray||0!==0)g=(function(){var __old__=g;var __ret__=new Uint8Array(i/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else g=new Uint8Array(i/1|0);b8=g;}s=cy;i=o[p]|0;r=m[n]|0;q=k[l]|0;s[j].a1=null;s[j].i2=i;s[j].a3=null;s[j].a4=r;s[j].a5=null;s[j].i6=q;s[j].i7=1;s[j].i8=0;s[j].a10=null;s[j].a11=null;g[j]=1;return s[j];}function fm(j){var m=0,k=0,i=null,g=null;cz=(cz|0)+1|0;m=j.a4|0;g=a;k=c[4+m>>2]|0;g=aL(g,k);i=new CheerpException(g);j.a0=i;throw i;;}function hg(){return cz|0;}function g8(){throw new Error('Cheerp: Signal raised');;}var cz=0;var cx=16;var pz=new Uint8Array(16);var b8=pz;var pA=qr(16);var cy=pA;function qq(){this.a0=null;this.a1=null;this.i2=0;this.a3=null;this.a4=0;this.a5=null;this.i6=0;this.i7=0;this.i8=0;this.a9=null;this.a10=null;this.a11=null;}function qo(obj){var a=[];a[0]=obj;obj.o=0;obj.a=a;a[1]=obj.a2;obj.a2.o=1;obj.a2.a=a;a[2]=obj.a3;obj.a3.o=2;obj.a3.a=a;return obj;}function qp(obj){var a=[];a[0]=obj;obj.o=0;obj.a=a;a[1]=obj.a2;obj.a2.o=1;obj.a2.a=a;a[2]=obj.a4;obj.a4.o=2;obj.a4.a=a;return obj;}function qr(e){var r=[];for(var i=0;i<e;i++)r[i]=new qq();return r;}function qs(r,s,e){for(var i=s;i<e;i++)r[i]=new qq();return r;}function CheerpException(m){var instance=new Error('Uncaught C++ exception: '+m);instance.name='CheerpException';Object.setPrototypeOf(instance,Object.getPrototypeOf(this));if(Error.captureStackTrace){Error.captureStackTrace(instance, CheerpException);}return instance;}CheerpException.prototype=Object.create(Error.prototype);function rn(pages){try{var ret=rt.grow(pages);__heap=rt.buffer;ro(__heap);return ret;}catch(e){return -1;}}var a=null,c=null,__asm=null,__heap=null;function rp(){throw new Error('this should be unreachable');};var rt=new WebAssembly.Memory({initial:17,maximum:128});var g7=null;var cj=null;var gd=null;var cW=null;var j3=null;var j2=null;var j1=null;var aG=null;var dW=null;var j5=null;var hn=null;var hm=null;var j9=null;var kb=null;var kl=null;var kp=null;var kD=null;var kC=null;var kA=null;var kQ=null;var kx=null;var kw=null;var kv=null;var kt=null;var kq=null;var kP=null;var kU=null;var hk=null;var hs=null;var qf=null;var x=null;var aS=null;var av=null;var eraseEdgeW=rp;var eraseNodeW=rp;var fillModalWithEdgeW=rp;var fillModalWithNodeW=rp;var flipEdgePlugW=rp;var getConnectedEdgesW=rp;var getGraphJsonW=rp;var moveNodeW=rp;var newEdgeW=rp;var newNodeW=rp;var redoW=rp;var undoW=rp;var updateEdgeDataW=rp;var updateNodeDataW=rp;rp.promise=rs('app.wasm').then(g=>WebAssembly.instantiate(g,{i:{rt:rt,fo:fo,g8:g8,hg:hg,dX:dX,b0:b0,ck:ck,gu:gu,gx:gx,rn:rn,}})).then(g=>{__asm=g.instance.exports;__heap=rt.buffer;ro(__heap);g7=__asm.g7;cj=__asm.cj;gd=__asm.gd;cW=__asm.cW;j3=__asm.j3;j2=__asm.j2;j1=__asm.j1;aG=__asm.aG;dW=__asm.dW;j5=__asm.j5;hn=__asm.hn;hm=__asm.hm;j9=__asm.j9;kb=__asm.kb;kl=__asm.kl;kp=__asm.kp;kD=__asm.kD;kC=__asm.kC;kA=__asm.kA;kQ=__asm.kQ;kx=__asm.kx;kw=__asm.kw;kv=__asm.kv;kt=__asm.kt;kq=__asm.kq;kP=__asm.kP;kU=__asm.kU;hk=__asm.hk;hs=__asm.hs;qf=__asm.qf;x=__asm.x;aS=__asm.aS;av=__asm.av;eraseEdgeW=qK;eraseNodeW=qB;fillModalWithEdgeW=qD;fillModalWithNodeW=qG;flipEdgePlugW=qH;getConnectedEdgesW=qI;getGraphJsonW=qC;moveNodeW=qJ;newEdgeW=qA;newNodeW=qL;redoW=qv;undoW=qu;updateEdgeDataW=qE;updateNodeDataW=qF;eraseEdgeW.promise=eraseNodeW.promise=fillModalWithEdgeW.promise=fillModalWithNodeW.promise=flipEdgePlugW.promise=getConnectedEdgesW.promise=getGraphJsonW.promise=moveNodeW.promise=newEdgeW.promise=newNodeW.promise=redoW.promise=undoW.promise=updateEdgeDataW.promise=updateNodeDataW.promise=Promise.resolve();__asm.g7();});function ro(g){a=new Uint8Array(g);c=new Int32Array(g);}