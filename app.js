"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var qW=Math.imul;var qX=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function rk(p){var b=null;if(typeof self==='object')b=fetch(p).then(r=>r.arrayBuffer());else if(typeof require==='function'){p=require('path').join(__dirname, p);b=new Promise((y,n)=>{require('fs').readFile(p,(e,d)=>{if(e)n(e);else y(d);});});}else b=new Promise((y,n)=>{y(read(p,'binary'));});return b;}function qD(q,o,m){var j=null,g=0,k=0,i=null;j=aS();i=-16+j|0;ar(i);g=i|0;p8(g,q,o,m);i=a;k=c[8+g>>2]|0;i=aF(i,k);aC(g);ar(j);return i;}function aF(g,h){var j=null,i=0,k=0;j=String();i=g[h]|0;if((i&255)===0)return String(j);k=0;while(1){j=j.concat(String.fromCharCode(i<<24>>24));k=k+1|0;i=g[h+k|0]|0;if((i&255)!==0)continue;break;}return String(j);}function qu(m,k){var j=null,i=null,g=0;j=aS();i=-16+j|0;ar(i);g=i|0;aE(g,m);nO(g,k);aC(g);ar(j);}function aE(i,g){var m=null,k=0,j=0;hN(i|0);hM(i|0,g.length);m=a;k=c[8+i>>2]|0;if(((g.length)|0)>0){j=0;while(1){m[k+j|0]=g.charCodeAt(j);j=j+1|0;if((j|0)<((g.length)|0))continue;break;}}}function qt(q,o,m){var k=null,j=null,i=0,g=0;k=aS();j=-32+k|0;ar(j);i=16+j|0;aE(i,q);g=j|0;aE(g,o);hK(i,g,m);aC(g);aC(i);ar(k);}function qs(m,k){var j=null,i=null,g=0;j=aS();i=-16+j|0;ar(i);g=i|0;aE(g,m);hH(g,k);aC(g);ar(j);}function qA(q,o,m,k){var j=null,i=null,g=0;j=aS();i=-16+j|0;ar(i);g=i|0;aE(g,q);hC(g,o,m,k);aC(g);ar(j);}function qz(u){var s=null,k=0,o=0,r=0,t=0,j=null,g=0,i=0,q=null,m=0;s=aS();j=-72+s|0;ar(j);k=56+j|0;kt(k);ks(k,u.length);if(((u.length)|0)!==0){g=40+j|0;i=0;while(1){q=u[0+i|0];aE(g,q);kj(k,g);aC(g);i=i+1|0;if(i>>>0<(u.length)>>>0)continue;break;}}g=16+j|0;hD(g,k);q=new Array();i=8+j|0;kg(i,g);o=j|0;kf(o);m=c[i>>2]|0;r=c[o>>2]|0;if((m|0)!=(r|0))while(1){j=a;t=c[16+m>>2]|0;q.push(aF(j,t));j$(i)|0;m=c[i>>2]|0;if((m|0)!=(r|0))continue;break;}ke(g);kc(k);ar(s);return q;}function qy(o,m,k){var j=null,i=null,g=0;j=aS();i=-16+j|0;ar(i);g=i|0;aE(g,o);j_(g,m,k);aC(g);ar(j);}function dO(r,q,o,m){var k=null,j=0,i=null,g=null;k=a;j=c[8+r>>2]|0;k=aF(k,j);i=a;j=c[8+q>>2]|0;i=aF(i,j);g=a;j=c[8+o>>2]|0;g=aF(g,j);fillModalAndOpenJ(k,i,g,!!m);}function qx(k){var j=null,i=null,g=0;j=aS();i=-16+j|0;ar(i);g=i|0;aE(g,k);j6(g);aC(g);ar(j);}function qw(s,r,q,o){var m=null,k=null,j=0,i=0,g=0;m=aS();k=-48+m|0;ar(k);j=32+k|0;aE(j,s);i=16+k|0;aE(i,r);g=k|0;aE(g,q);jW(j,i,g,o);aC(g);aC(i);aC(j);ar(m);}function qv(s,r,q,o){var m=null,k=null,j=0,i=0,g=0;m=aS();k=-48+m|0;ar(k);j=32+k|0;aE(j,s);i=16+k|0;aE(i,r);g=k|0;aE(g,q);jS(j,i,g,o);aC(g);aC(i);aC(j);ar(m);}function qC(k){var j=null,i=null,g=0;j=aS();i=-16+j|0;ar(i);g=i|0;aE(g,k);jO(g);aC(g);ar(j);}function qB(){var k=null,j=0,m=0,i=null,g=0;k=aS();i=-160+k|0;ar(i);cc();j=16+i|0;mU(j);g=8+j|0;mT(g)|0;mS(g)|0;g=i|0;mR(g,j);i=a;m=c[8+g>>2]|0;i=aF(i,m);console.log(i);aC(g);ef(j);ar(k);}function qn(){cc();cU();}function qm(){cc();gq();}function cd(k,j,i,g){var o=null,q=0,m=null;o=a;q=c[8+k>>2]|0;o=aF(o,q);m=a;q=c[8+j>>2]|0;m=aF(m,q);updateNodeJ(o,m,i,g);}function gK(i){var j=0,g=null;g=a;j=c[8+i>>2]|0;g=aF(g,j);eraseNodeJ(g);}function bU(o,m,k,j,i,g){var u=null,q=0,t=null,s=null,r=null;u=a;q=c[8+o>>2]|0;u=aF(u,q);t=a;q=c[8+m>>2]|0;t=aF(t,q);s=a;q=c[8+k>>2]|0;s=aF(s,q);r=a;q=c[8+j>>2]|0;r=aF(r,q);updateEdgeJ(u,t,s,r,!!i,!!g);}function gH(i){var j=0,g=null;g=a;j=c[8+i>>2]|0;g=aF(g,j);eraseEdgeJ(g);}function fD(m,k,j){var i=null,g=null;g=[0];g[0]=(k|0);i=new Int32Array(2);i[0]=j;i[1]=m;g=fC(i,1,g,0,i,0);fB(g);;}function fC(o,p,m,n,k,l){var s=null,r=0,q=0,j=0,g=null,i=0;j=cs|0;a:{b:{if((j|0)>1){g=b1;i=1;while(1){if((g[i]&255)!==0){i=i+1|0;if((i|0)===(j|0))break b;continue;}break;}}else{i=1;}if((i|0)!==(j|0)){g=b1;j=i;g=g;break a;}}cs=j<<1;g=ct;i=qW(j,96)|0;if(g!==nullArray||0!==0)g=qk(g,g.length,i/48|0);else g=qj(i/48|0);ct=g;i=cs|0;g=b1;if(g!==nullArray||0!==0)g=(function(){var __old__=g;var __ret__=new Uint8Array(i/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else g=new Uint8Array(i/1|0);b1=g;}s=ct;i=o[p]|0;r=m[n]|0;q=k[l]|0;s[j].a1=null;s[j].i2=i;s[j].a3=null;s[j].a4=r;s[j].a5=null;s[j].i6=q;s[j].i7=1;s[j].i8=0;s[j].a10=null;s[j].a11=null;g[j]=1;return s[j];}function fB(j){var m=0,k=0,i=null,g=null;cu=(cu|0)+1|0;m=j.a4|0;g=a;k=c[4+m>>2]|0;g=aF(g,k);i=new CheerpException(g);j.a0=i;throw i;;}function hz(){return cu|0;}function hp(){throw new Error('Cheerp: Signal raised');;}var cu=0;var cs=16;var pp=new Uint8Array(16);var b1=pp;var pq=qj(16);var ct=pq;function qi(){this.a0=null;this.a1=null;this.i2=0;this.a3=null;this.a4=0;this.a5=null;this.i6=0;this.i7=0;this.i8=0;this.a9=null;this.a10=null;this.a11=null;}function qg(obj){var a=[];a[0]=obj;obj.o=0;obj.a=a;a[1]=obj.a2;obj.a2.o=1;obj.a2.a=a;a[2]=obj.a3;obj.a3.o=2;obj.a3.a=a;return obj;}function qh(obj){var a=[];a[0]=obj;obj.o=0;obj.a=a;a[1]=obj.a2;obj.a2.o=1;obj.a2.a=a;a[2]=obj.a4;obj.a4.o=2;obj.a4.a=a;return obj;}function qj(e){var r=[];for(var i=0;i<e;i++)r[i]=new qi();return r;}function qk(r,s,e){for(var i=s;i<e;i++)r[i]=new qi();return r;}function CheerpException(m){var instance=new Error('Uncaught C++ exception: '+m);instance.name='CheerpException';Object.setPrototypeOf(instance,Object.getPrototypeOf(this));if(Error.captureStackTrace){Error.captureStackTrace(instance, CheerpException);}return instance;}CheerpException.prototype=Object.create(Error.prototype);function rf(pages){try{var ret=rl.grow(pages);__heap=rl.buffer;rg(__heap);return ret;}catch(e){return -1;}}var a=null,c=null,__asm=null,__heap=null;function rh(){throw new Error('this should be unreachable');};var rl=new WebAssembly.Memory({initial:17,maximum:128});var ho=null;var cc=null;var gq=null;var cU=null;var mU=null;var mT=null;var mS=null;var mR=null;var aC=null;var ef=null;var jO=null;var hN=null;var hM=null;var jS=null;var jW=null;var j6=null;var j_=null;var kt=null;var ks=null;var kj=null;var hD=null;var kg=null;var kf=null;var ke=null;var kc=null;var j$=null;var hC=null;var hH=null;var hK=null;var nO=null;var p8=null;var x=null;var aS=null;var ar=null;var eraseEdgeW=rh;var eraseNodeW=rh;var fillModalWithEdgeW=rh;var fillModalWithNodeW=rh;var flipEdgePlugW=rh;var getConnectedEdgesW=rh;var moveNodeW=rh;var newEdgeW=rh;var newNodeW=rh;var printGraphW=rh;var redoW=rh;var undoW=rh;var updateEdgeDataW=rh;var updateNodeDataW=rh;rh.promise=rk('app.wasm').then(g=>WebAssembly.instantiate(g,{i:{rl:rl,fD:fD,hp:hp,hz:hz,dO:dO,bU:bU,cd:cd,gH:gH,gK:gK,rf:rf,}})).then(g=>{__asm=g.instance.exports;__heap=rl.buffer;rg(__heap);ho=__asm.ho;cc=__asm.cc;gq=__asm.gq;cU=__asm.cU;mU=__asm.mU;mT=__asm.mT;mS=__asm.mS;mR=__asm.mR;aC=__asm.aC;ef=__asm.ef;jO=__asm.jO;hN=__asm.hN;hM=__asm.hM;jS=__asm.jS;jW=__asm.jW;j6=__asm.j6;j_=__asm.j_;kt=__asm.kt;ks=__asm.ks;kj=__asm.kj;hD=__asm.hD;kg=__asm.kg;kf=__asm.kf;ke=__asm.ke;kc=__asm.kc;j$=__asm.j$;hC=__asm.hC;hH=__asm.hH;hK=__asm.hK;nO=__asm.nO;p8=__asm.p8;x=__asm.x;aS=__asm.aS;ar=__asm.ar;eraseEdgeW=qs;eraseNodeW=qu;fillModalWithEdgeW=qC;fillModalWithNodeW=qx;flipEdgePlugW=qy;getConnectedEdgesW=qz;moveNodeW=qA;newEdgeW=qt;newNodeW=qD;printGraphW=qB;redoW=qn;undoW=qm;updateEdgeDataW=qv;updateNodeDataW=qw;eraseEdgeW.promise=eraseNodeW.promise=fillModalWithEdgeW.promise=fillModalWithNodeW.promise=flipEdgePlugW.promise=getConnectedEdgesW.promise=moveNodeW.promise=newEdgeW.promise=newNodeW.promise=printGraphW.promise=redoW.promise=undoW.promise=updateEdgeDataW.promise=updateNodeDataW.promise=Promise.resolve();__asm.ho();});function rg(g){a=new Uint8Array(g);c=new Int32Array(g);}