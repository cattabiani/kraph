"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var pF=Math.imul;var pG=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function p5(p){var b=null;if(typeof self==='object')b=fetch(p).then(r=>r.arrayBuffer());else if(typeof require==='function'){p=require('path').join(__dirname, p);b=new Promise((y,n)=>{require('fs').readFile(p,(e,d)=>{if(e)n(e);else y(d);});});}else b=new Promise((y,n)=>{y(read(p,'binary'));});return b;}function pk(o,m){var j=null,g=0,k=0,i=null;j=cn();i=-16+j|0;bB(i);g=i|0;o1(g,o,m);i=a;k=c[8+g>>2]|0;i=aP(i,k);da(g);bB(j);return i;}function aP(g,h){var j=null,i=0,k=0;j=String();i=g[h]|0;if((i&255)===0)return String(j);k=0;while(1){j=j.concat(String.fromCharCode(i<<24>>24));k=k+1|0;i=g[h+k|0]|0;if((i&255)!==0)continue;break;}return String(j);}function ko(q,o,m,k){var i=null,j=0,g=null;i=a;j=c[8+q>>2]|0;i=aP(i,j);g=a;j=c[8+o>>2]|0;g=aP(g,j);updateNodeJ(i,g,m,k);}function km(i){var j=0,g=null;g=a;j=c[8+i>>2]|0;g=aP(g,j);eraseNodeJ(g);}function kj(s,r,q,o){var m=null,g=0,k=null,j=null,i=null;m=a;g=c[8+s>>2]|0;m=aP(m,g);k=a;g=c[8+r>>2]|0;k=aP(k,g);j=a;g=c[8+q>>2]|0;j=aP(j,g);i=a;g=c[8+o>>2]|0;i=aP(i,g);updateEdgeJ(m,k,j,i);}function kh(i){var j=0,g=null;g=a;j=c[8+i>>2]|0;g=aP(g,j);eraseEdgeJ(g);}function pj(){var k=null,j=0,m=0,i=null,g=0;k=cn();i=-160+k|0;bB(i);b3();j=16+i|0;ke(j);g=8+j|0;hL(g)|0;hK(g)|0;g=i|0;hJ(g,j);i=a;m=c[8+g>>2]|0;i=aP(i,m);console.log(i);da(g);cU(j);bB(k);}function pm(){b3();dH();}function pl(){b3();jm();}function gk(m,k,j){var i=null,g=null;g=[0];g[0]=(k|0);i=new Int32Array(2);i[0]=j;i[1]=m;g=gj(i,1,g,0,i,0);gi(g);;}function gj(o,p,m,n,k,l){var s=null,r=0,q=0,j=0,g=null,i=0;j=b5|0;a:{b:{if((j|0)>1){g=bL;i=1;while(1){if((g[i]&255)!==0){i=i+1|0;if((i|0)===(j|0))break b;continue;}break;}}else{i=1;}if((i|0)!==(j|0)){g=bL;j=i;g=g;break a;}}b5=j<<1;g=b6;i=pF(j,96)|0;if(g!==nullArray||0!==0)g=pd(g,g.length,i/48|0);else g=pc(i/48|0);b6=g;i=b5|0;g=bL;if(g!==nullArray||0!==0)g=(function(){var __old__=g;var __ret__=new Uint8Array(i/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else g=new Uint8Array(i/1|0);bL=g;}s=b6;i=o[p]|0;r=m[n]|0;q=k[l]|0;s[j].a1=null;s[j].i2=i;s[j].a3=null;s[j].a4=r;s[j].a5=null;s[j].i6=q;s[j].i7=1;s[j].i8=0;s[j].a10=null;s[j].a11=null;g[j]=1;return s[j];}function gi(j){var m=0,k=0,i=null,g=null;b7=(b7|0)+1|0;m=j.a4|0;g=a;k=c[4+m>>2]|0;g=aP(g,k);i=new CheerpException(g);j.a0=i;throw i;;}function ey(){return b7|0;}function hS(){throw new Error('Cheerp: Signal raised');;}var b7=0;var b5=16;var l1=new Uint8Array(16);var bL=l1;var l2=pc(16);var b6=l2;function pb(){this.a0=null;this.a1=null;this.i2=0;this.a3=null;this.a4=0;this.a5=null;this.i6=0;this.i7=0;this.i8=0;this.a9=null;this.a10=null;this.a11=null;}function o$(obj){var a=[];a[0]=obj;obj.o=0;obj.a=a;a[1]=obj.a2;obj.a2.o=1;obj.a2.a=a;a[2]=obj.a3;obj.a3.o=2;obj.a3.a=a;return obj;}function pa(obj){var a=[];a[0]=obj;obj.o=0;obj.a=a;a[1]=obj.a2;obj.a2.o=1;obj.a2.a=a;a[2]=obj.a4;obj.a4.o=2;obj.a4.a=a;return obj;}function pc(e){var r=[];for(var i=0;i<e;i++)r[i]=new pb();return r;}function pd(r,s,e){for(var i=s;i<e;i++)r[i]=new pb();return r;}function CheerpException(m){var instance=new Error('Uncaught C++ exception: '+m);instance.name='CheerpException';Object.setPrototypeOf(instance,Object.getPrototypeOf(this));if(Error.captureStackTrace){Error.captureStackTrace(instance, CheerpException);}return instance;}CheerpException.prototype=Object.create(Error.prototype);function p0(pages){try{var ret=p6.grow(pages);__heap=p6.buffer;p1(__heap);return ret;}catch(e){return -1;}}var a=null,c=null,__asm=null,__heap=null;function p2(){throw new Error('this should be unreachable');};var p6=new WebAssembly.Memory({initial:17,maximum:128});var hR=null;var b3=null;var jm=null;var dH=null;var ke=null;var hL=null;var hK=null;var hJ=null;var da=null;var cU=null;var o1=null;var y=null;var cn=null;var bB=null;var newNodeW=p2;var printGraphW=p2;var redoW=p2;var undoW=p2;p2.promise=p5('app.wasm').then(g=>WebAssembly.instantiate(g,{i:{p6:p6,gk:gk,hS:hS,ey:ey,ko:ko,km:km,kh:kh,kj:kj,p0:p0,}})).then(g=>{__asm=g.instance.exports;__heap=p6.buffer;p1(__heap);hR=__asm.hR;b3=__asm.b3;jm=__asm.jm;dH=__asm.dH;ke=__asm.ke;hL=__asm.hL;hK=__asm.hK;hJ=__asm.hJ;da=__asm.da;cU=__asm.cU;o1=__asm.o1;y=__asm.y;cn=__asm.cn;bB=__asm.bB;newNodeW=pk;printGraphW=pj;redoW=pm;undoW=pl;newNodeW.promise=printGraphW.promise=redoW.promise=undoW.promise=Promise.resolve();__asm.hR();});function p1(g){a=new Uint8Array(g);c=new Int32Array(g);}