"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var wA=Math.imul;var wB=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function w0(p){var b=null;if(typeof self==='object')b=fetch(p).then(r=>r.arrayBuffer());else if(typeof require==='function'){p=require('path').join(__dirname, p);b=new Promise((y,n)=>{require('fs').readFile(p,(e,d)=>{if(e)n(e);else y(d);});});}else b=new Promise((y,n)=>{y(read(p,'binary'));});return b;}function wh(s,q,o){var l=null,j=null,h=0,m=0;try{l=bM();j=-16+l|0;a2(j);h=j|0;vJ(h,s,q,o);j=a;m=bP(h)|0;j=bG(j,m);}catch(wZ){l=wZ;l=$(l,0,0);m=oSlot;aN(h);j=c;h=l;by(j,h);;}aN(h);a2(l);return j;}function bG(h,i){var l=null,j=0,m=0;l=String();j=h[i]|0;if((j&255)===0)return String(l);m=0;while(1){l=l.concat(String.fromCharCode(j<<24>>24));m=m+1|0;j=h[i+m|0]|0;if((j&255)!==0)continue;break;}return String(l);}function wg(q,o){var m=0,l=null,j=null,h=0;try{l=bM();j=-16+l|0;a2(j);h=j|0;bA(h,q);pZ(h,o);}catch(wZ){l=wZ;l=$(l,0,0);m=oSlot;aN(h);j=c;h=l;by(j,h);;}aN(h);a2(l);}function bA(j,h){var m=0,o=null,l=0,s=0,q=null;try{pV(j|0);m=h.length;pU(j|0,m);o=a;m=pT(j|0)|0;l=0;while(1){try{s=h.length;if((l|0)<(s|0)){s=h.charCodeAt(l);o[m+l|0]=s;l=l+1|0;continue;}return;}catch(wZ){o=wZ;}break;}o=$(o,0,0);m=oSlot;aN(j|0);q=c;l=o;by(q,l);;}catch(wZ){o=wZ;}o=$(o,0,0);m=oSlot;aN(j|0);q=c;l=o;by(q,l);;}function wd(t,s,q){var j=0,l=null,m=null,h=0,o=0;a:{try{l=bM();m=-32+l|0;a2(m);h=16+m|0;bA(h,t);j=m|0;bA(j,s);}catch(wZ){l=wZ;l=$(l,0,0);o=oSlot;break a;}try{pR(h,j,q);}catch(wZ){l=wZ;l=$(l,0,0);o=oSlot;aN(j);break a;}aN(j);aN(h);a2(l);return;}aN(h);m=c;h=l;by(m,h);;}function wa(q,o){var m=0,l=null,j=null,h=0;try{l=bM();j=-16+l|0;a2(j);h=j|0;bA(h,q);pH(h,o);}catch(wZ){l=wZ;l=$(l,0,0);m=oSlot;aN(h);j=c;h=l;by(j,h);;}aN(h);a2(l);}function wc(t,s,q,o){var m=0,l=null,j=null,h=0;try{l=bM();j=-16+l|0;a2(j);h=j|0;bA(h,t);mK(h,s,q,o);}catch(wZ){l=wZ;l=$(l,0,0);m=oSlot;aN(h);j=c;h=l;by(j,h);;}aN(h);a2(l);}function wb(w){var q=0,s=0,l=null,o=null,m=0,h=0,j=0,v=0,t=null;a:{try{l=bM();o=-72+l|0;a2(o);m=56+o|0;ps(m);h=w.length;pr(m,h);j=40+o|0;h=0;while(1){try{v=w.length;}catch(wZ){l=wZ;l=$(l,0,0);h=oSlot;break a;}if(h>>>0<v>>>0){{try{t=w[0+h|0];bA(j,t);}catch(wZ){l=wZ;l=$(l,0,0);h=oSlot;break a;}try{pp(m,j);}catch(wZ){l=wZ;l=$(l,0,0);h=oSlot;aN(j);break a;}aN(j);h=h+1|0;continue;}break a;}{try{q=16+o|0;mL(q,m);}catch(wZ){l=wZ;l=$(l,0,0);h=oSlot;break a;}b:{try{t=new Array();}catch(wZ){l=wZ;l=$(l,0,0);h=oSlot;break b;}j=8+o|0;pm(j,q);s=o|0;pl(s);c:if(g1(j,s)|0){{while(1){try{h=pk(j)|0;o=a;v=bP(h)|0;o=bG(o,v);}catch(wZ){l=wZ;l=$(l,0,0);h=oSlot;break b;}try{t.push(o);}catch(wZ){l=wZ;l=$(l,0,0);h=oSlot;break b;}mf(j)|0;if(g1(j,s)|0)continue;break;}break c;}break b;}eJ(q);gZ(m);a2(l);return t;}eJ(q);}break;}break a;}catch(wZ){l=wZ;}l=$(l,0,0);h=oSlot;}gZ(m);o=c;m=l;by(o,m);;}function wf(s,q,o){var m=0,l=null,j=null,h=0;try{l=bM();j=-16+l|0;a2(j);h=j|0;bA(h,s);me(h,q,o);}catch(wZ){l=wZ;l=$(l,0,0);m=oSlot;aN(h);j=c;h=l;by(j,h);;}aN(h);a2(l);}function g7(t,s,q,o){var m=null,l=0,j=null,h=null;m=a;l=bP(t|0)|0;m=bG(m,l);j=a;l=bP(s|0)|0;j=bG(j,l);h=a;l=bP(q|0)|0;h=bG(h,l);fillModalAndOpenJ(m,j,h,!!o);}function we(o){var m=0,l=null,j=null,h=0;try{l=bM();j=-16+l|0;a2(j);h=j|0;bA(h,o);pN(h);}catch(wZ){l=wZ;l=$(l,0,0);m=oSlot;aN(h);j=c;h=l;by(j,h);;}aN(h);a2(l);}function v9(w,v,t,s){var m=0,l=0,j=null,q=null,h=0,o=0;a:{try{j=bM();q=-48+j|0;a2(q);m=32+q|0;bA(m,w);l=16+q|0;bA(l,v);}catch(wZ){j=wZ;j=$(j,0,0);o=oSlot;break a;}b:{try{h=q|0;bA(h,t);}catch(wZ){j=wZ;j=$(j,0,0);o=oSlot;break b;}try{l5(m,l,h,s);}catch(wZ){j=wZ;j=$(j,0,0);o=oSlot;aN(h);break b;}aN(h);aN(l);aN(m);a2(j);return;}aN(l);}aN(m);q=c;h=j;by(q,h);;}function v8(w,v,t,s){var m=0,l=0,j=null,q=null,h=0,o=0;a:{try{j=bM();q=-48+j|0;a2(q);m=32+q|0;bA(m,w);l=16+q|0;bA(l,v);}catch(wZ){j=wZ;j=$(j,0,0);o=oSlot;break a;}b:{try{h=q|0;bA(h,t);}catch(wZ){j=wZ;j=$(j,0,0);o=oSlot;break b;}try{l0(m,l,h,s);}catch(wZ){j=wZ;j=$(j,0,0);o=oSlot;aN(h);break b;}aN(h);aN(l);aN(m);a2(j);return;}aN(l);}aN(m);q=c;h=j;by(q,h);;}function v7(o){var m=0,l=null,j=null,h=0;try{l=bM();j=-16+l|0;a2(j);h=j|0;bA(h,o);lV(h);}catch(wZ){l=wZ;l=$(l,0,0);m=oSlot;aN(h);j=c;h=l;by(j,h);;}aN(h);a2(l);}function v6(){var l=0,j=null,o=null,h=0,m=0;a:{try{j=bM();o=-160+j|0;a2(o);dT();h=16+o|0;lU(h);lT(8+h|0)|0;}catch(wZ){j=wZ;j=$(j,0,0);m=oSlot;break a;}try{l=o|0;lS(l,h);}catch(wZ){j=wZ;j=$(j,0,0);m=oSlot;break a;}try{o=a;m=bP(l)|0;o=bG(o,m);}catch(wZ){j=wZ;j=$(j,0,0);m=oSlot;aN(l);break a;}aN(l);dS(h);a2(j);return o;}dS(h);o=c;h=j;by(o,h);;}function dQ(h,i){gj(h,i);iO();;}function v5(){dT();gf();}function v$(){dT();ma();}function v_(o){var m=0,l=null,j=null,h=0;try{l=bM();j=-16+l|0;a2(j);dT();h=j|0;bA(h,o);oo(h);}catch(wZ){l=wZ;l=$(l,1,0);m=oSlot;aN(h);j=c;h=l;by(j,h);;}aN(h);a2(l);}function dU(m,l,j,h){var q=null,s=0,o=null;q=a;s=bP(m|0)|0;q=bG(q,s);o=a;s=bP(l|0)|0;o=bG(o,s);updateNodeJ(q,o,j,h);}function mk(){resetJ();}function mi(j){var l=0,h=null;h=a;l=bP(j|0)|0;h=bG(h,l);eraseNodeJ(h);}function de(q,o,m,l,j,h){var x=null,s=0,w=null,v=null,t=null;x=a;s=bP(q|0)|0;x=bG(x,s);w=a;s=bP(o|0)|0;w=bG(w,s);v=a;s=bP(m|0)|0;v=bG(v,s);t=a;s=bP(l|0)|0;t=bG(t,s);updateEdgeJ(x,w,v,t,!!j,!!h);}function l_(j){var l=0,h=null;h=a;l=bP(j|0)|0;h=bG(h,l);eraseEdgeJ(h);}function $(l,j,h){var C=null,B=null,w=null,x=0,v=0,m=0,t=0,o=null,z=0,q=0,s=null;C=bM();B=-16+C|0;a2(B);if(!(eK|0))if(!(a[1068676]|0)){eK=1;a:{b:{if(((l instanceof CheerpException|0)&1)===0){if((h|0)>0){x=h+j|0;v=1048776|0;m=j;while(1){if(((hb[m].a0|0)|0)==(v|0)){w=[null];w[0]=l;m=db|0;c:{d:{if((m|0)>1){o=b9;q=1;while(1){if((o[q]&255)!==0){q=q+1|0;if((q|0)===(m|0))break d;continue;}break;}}else{q=1;}if((q|0)!==(m|0)){m=q;break c;}}db=m<<1;o=b_;q=wA(m,96)|0;if(o!==nullArray||0!==0)o=vZ(o,o.length,q/48|0);else o=vY(q/48|0);b_=o;q=db|0;o=b9;if(o!==nullArray||0!==0)o=(function(){var __old__=o;var __ret__=new Uint8Array(q/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else o=new Uint8Array(q/1|0);b9=o;}o=b_;s=w;q=0;o[m].a1=s;o[m].i2=q;o[m].a3=null;o[m].a4=v;o[m].a5=null;o[m].i6=0;o[m].i7=1;o[m].i8=0;o[m].a10=nullArray;o[m].a10o=0;o[m].a11=nullArray;s=b9;s[m]=1;o[m].a0=l;eU={d:o,o:0+m|0};cO=(cO|0)+1|0;c[8+B>>2]=null;c[12+B>>2]=0;w=o;v=0+m|0;break b;}m=m+1|0;if((m|0)<(x|0))continue;break;}}c[8+B>>2]=null;c[12+B>>2]=0;eS=l;break a;}c[8+B>>2]=null;c[12+B>>2]=0;w=eU;v=w.o;w=w.d;x=h+j|0;}m=v;c[8+B>>2]=(m|0);if((h|0)>0){m=B|0;t=j;while(1){o=hb[t];z=o.a0|0;if((z|0)!=(0|0)){try{q=w[v].a4|0;jZ(m,z|0,q|0);}catch(wZ){C=wZ;C=$(C,0,1);x=oSlot;B=c;v=C;dQ(B,v);;}if((a[4+m>>0]&255)!==0){t=a[5+m>>0]|0;x=c[m>>2]|0;s=w[v].a1;z=w[v].i2|0;if(s!==null){if((t&255)!==0){s=s[z];t=s.o;s=s.d;}else{t=z;s=s;}if((x|0)!==0){if(s!==nullArray||t!==0)s=s[t].a[s[t].o-(-x|0)];else{s=s[t];}}else{s=s[t];}}else if((z|0)!==0){s=a;q=jY(z,(t&255)!==0?1:0,x)|0;s=s[q];}else{s=null;}w[v].a3=s;c[12+B>>2]=o.i1|0;}else{t=t+1|0;if((t|0)<(x|0))continue;}}else c[12+B>>2]=o.i1|0;break;}}}eK=0;w=c[8+B>>2];x=0;o=w;v=(c[12+B>>2]|0);a2(C);oSlot=v;return o;}a[1068676]=1;throw 'Program called std::terminate()';;}function mz(m,l,j){var s=null,h=null,q=null,o=0;s=[0];s[0]=(l|0);h=new Int32Array(2);h[0]=j;h[1]=m;q=my(h,1,s,0,h,0);o=oSlot;gk(q,o);;}function my(q,r,o,p,m,n){var v=null,t=0,s=0,l=0,h=null,j=0;l=db|0;a:{b:{if((l|0)>1){h=b9;j=1;while(1){if((h[j]&255)!==0){j=j+1|0;if((j|0)===(l|0))break b;continue;}break;}}else{j=1;}if((j|0)!==(l|0)){h=b9;l=j;h=h;break a;}}db=l<<1;h=b_;j=wA(l,96)|0;if(h!==nullArray||0!==0)h=vZ(h,h.length,j/48|0);else h=vY(j/48|0);b_=h;j=db|0;h=b9;if(h!==nullArray||0!==0)h=(function(){var __old__=h;var __ret__=new Uint8Array(j/1|0);__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));return __ret__;})();else h=new Uint8Array(j/1|0);b9=h;}v=b_;j=q[r]|0;t=o[p]|0;s=m[n]|0;v[l].a1=null;v[l].i2=j;v[l].a3=null;v[l].a4=t;v[l].a5=null;v[l].i6=s;v[l].i7=1;v[l].i8=0;v[l].a10=nullArray;v[l].a10o=0;v[l].a11=nullArray;h[l]=1;oSlot=0+l|0;return v;}function gk(j,k){j={d:j,o:k};var o=0,m=0,l=null,h=null;eU=j;cO=(cO|0)+1|0;o=j.d[j.o].a4|0;h=a;m=c[4+o>>2]|0;h=bG(h,m);l=new CheerpException(h);j.d[j.o].a0=l;throw l;;}function gj(h,i){var o=0,m=null,l=null,j=0;o=i;m=b_;j=m[o].i8|0;j=(((j|0)>=0)?j:0-(j|0)|0);m[o].i8=j+1|0;l=da;if(m!==l.d||(0+o|0)!==l.o){m[o].a10=l.d;m[o].a10o=l.o;da={d:m,o:0+o|0};}cO=(cO|0)-1|0;}function bh(){var q=null,j=null,h=0,m=null,o=null,l=0;j=da;h=j.d[j.o].i8|0;if((h|0)<0){h=h+1|0;j.d[j.o].i8=h;if((h|0)===0){m=j.d[j.o].a10;h=j.d[j.o].a10o|0;da={d:m,o:h};}}else{h=h-1|0;j.d[j.o].i8=h;if((h|0)===0){m=j.d[j.o].a10;h=j.d[j.o].a10o|0;da={d:m,o:h};m=j.d[j.o].a11;if(m!==nullArray||0!==0){o=b_;h=((wA(j.o,48))-(wA(0,48))|0)/48|0;j=o[h].a5;if(j!==null){try{q=o[h].a1;l=o[h].i2|0;j(q[l]);}catch(wZ){j=wZ;j=$(j,0,1);h=oSlot;m=c;l=j;dQ(m,l);;}o[h].a5=null;}else{l=o[h].i6|0;if((l|0)!==0){f6(l,o[h].i2|0);o[h].i6=0;}}o=b9;o[h]=0;j=m;h=0;}else{h=j.o;j=j.d;}if(j!==nullArray||h!==0){h=h;j=b_;l=(j[h].i7|0)-1|0;j[h].i7=l;if((l|0)===0){h=(wA(h,48)|0)/48|0;m=j[h].a5;if(m!==null){try{o=j[h].a1;l=j[h].i2|0;m(o[l]);}catch(wZ){j=wZ;j=$(j,0,1);h=oSlot;m=c;l=j;dQ(m,l);;}j[h].a5=null;}else{l=j[h].i6|0;if((l|0)!==0){f6(l,j[h].i2|0);j[h].i6=0;}}j=b9;j[h]=0;}}}}}function iP(){return cO|0;}function iN(){a[1068676]=1;throw 'Program called std::terminate()';;}function iI(){var h=null;h=da;h.d[h.o].i8=-(h.d[h.o].i8|0)|0;gk(h.d,h.o);;}function by(h,i){var l=0,j=null;if(((i)|0)!==0){l=i;j=b_;j=j[l].a0;throw j;;}j=eS;eS=null;throw j;;}function d$(l,j,h){var o=null,m=0;try{r8(h|0);}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return;}c[267168]=0;}function ct(l,j,h){var o=null,m=0;try{mb(h|0);}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return;}c[267168]=0;}function as(m,l,j,h){var q=null,o=0;try{c1(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function aK(m,l,j,h){var q=null,o=0;try{bo(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function bx(m,l,j,h){var q=null,o=0;try{o=cc(j|0,h|0)|0;}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return 0|0;}c[267168]=0;return o|0;}function dy(l,j,h){var o=null,m=0;try{pL(h|0);}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return;}c[267168]=0;}function dx(q,o,m,l,j,h){var t=null,s=0;try{eq(m|0,l|0,j|0,h|0);}catch(wZ){t=wZ;t=$(t,q,o);s=oSlot;c[266746]=t;c[266747]=s;c[267168]=1;return;}c[267168]=0;}function aZ(m,l,j,h){var q=null,o=0;try{o=lF(j|0,h|0)|0;}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return 0|0;}c[267168]=0;return o|0;}function aJ(o,m,l,j,h){var s=null,q=0;try{q=bF(l|0,j|0,h)|0;}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return 0|0;}c[267168]=0;return q|0;}function dw(m,l,j,h){var q=null,o=0;try{o=jD(j|0,h)|0;}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return 0|0;}c[267168]=0;return o|0;}function cS(m,l,j,h){var q=null,o=0;try{o=jE(j|0,h)|0;}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return 0|0;}c[267168]=0;return o|0;}function br(m,l,j,h){var q=null,o=0;try{iF(j|0,h);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function ap(m,l,j,h){var q=null,o=0;try{gn(j|0,h);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function dv(l,j,h){var o=null,m=0;try{m=fu(h|0)|0;}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return 0|0;}c[267168]=0;return m|0;}function fa(l,j,h){var o=null,m=0;try{m=iQ(h|0)|0;}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return 0|0;}c[267168]=0;return m|0;}function cs(o,m,l,j,h){var s=null,q=0;try{q=iC(l,j|0,h)|0;}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return 0|0;}c[267168]=0;return q|0;}function iB(v,t,s,q,o,m,l,j,h){var x=null,w=0;try{ev(s|0,q|0,o|0,m|0,l|0,j|0,h);}catch(wZ){x=wZ;x=$(x,v,t);w=oSlot;c[266746]=x;c[266747]=w;c[267168]=1;return;}c[267168]=0;}function cR(j,h){var m=null,l=0;try{dB();}catch(wZ){m=wZ;m=$(m,j,h);l=oSlot;c[266746]=m;c[266747]=l;c[267168]=1;return;}c[267168]=0;}function cb(j,h){var m=null,l=0;try{iI();}catch(wZ){m=wZ;m=$(m,j,h);l=oSlot;c[266746]=m;c[266747]=l;c[267168]=1;return;}c[267168]=0;}function iz(s,q,o,m,l,j){var t=null,h=0;try{h=iA(o,m|0,l|0,j)|0;}catch(wZ){t=wZ;t=$(t,s,q);h=oSlot;c[266746]=t;c[266747]=h;c[267168]=1;return 0|0;}c[267168]=0;return h|0;}function e$(m,l,j,h){var q=null,o=0;try{kW(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function iy(o,m,l,j,h){var s=null,q=0;try{fX(l|0,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function ix(l,j,h){var o=null,m=0;try{mi(h|0);}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return;}c[267168]=0;}function iw(m,l,j,h){var q=null,o=0;try{gC(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function cQ(m,l,j,h){var q=null,o=0;try{os(j|0,h);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function e_(m,l,j,h){var q=null,o=0;try{kL(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function iu(o,m,l,j,h){var s=null,q=0;try{iv(l,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function d_(j,h){var m=null,l=0;try{bB();}catch(wZ){m=wZ;m=$(m,j,h);l=oSlot;c[266746]=m;c[266747]=l;c[267168]=1;return;}c[267168]=0;}function du(o,m,l,j,h){var s=null,q=0;try{q=nB(l|0,j|0,h)|0;}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return 0|0;}c[267168]=0;return q|0;}function e9(o,m,l,j,h){var s=null,q=0;try{kN(l|0,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function it(l,j,h){var o=null,m=0;try{l_(h|0);}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return;}c[267168]=0;}function ca(m,l,j,h){var q=null,o=0;try{rn(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function d9(m,l,j,h){var q=null,o=0;try{rm(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function aU(o,m,l,j,h){var s=null,q=0;try{is(l,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function bs(j,h){var m=null,l=0;try{on();}catch(wZ){m=wZ;m=$(m,j,h);l=oSlot;c[266746]=m;c[266747]=l;c[267168]=1;return;}c[267168]=0;}function fc(j,h){var m=null,l=0;try{mk();}catch(wZ){m=wZ;m=$(m,j,h);l=oSlot;c[266746]=m;c[266747]=l;c[267168]=1;return;}c[267168]=0;}function bL(l,j,h){var o=null,m=0;try{gy(h|0);}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return;}c[267168]=0;}function e8(m,l,j,h){var q=null,o=0;try{iG(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function e7(l,j,h){var o=null,m=0;try{m=jM(h|0)|0;}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return 0|0;}c[267168]=0;return m|0;}function e6(q,o,m,l,j,h){var t=null,s=0;try{fY(m|0,l|0,j|0,h|0);}catch(wZ){t=wZ;t=$(t,q,o);s=oSlot;c[266746]=t;c[266747]=s;c[267168]=1;return;}c[267168]=0;}function ir(q,o,m,l,j,h){var t=null,s=0;try{dU(m|0,l|0,j,h);}catch(wZ){t=wZ;t=$(t,q,o);s=oSlot;c[266746]=t;c[266747]=s;c[267168]=1;return;}c[267168]=0;}function iq(t,s,q,o,m,l,j,h){var w=null,v=0;try{de(q|0,o|0,m|0,l|0,j,h);}catch(wZ){w=wZ;w=$(w,t,s);v=oSlot;c[266746]=w;c[266747]=v;c[267168]=1;return;}c[267168]=0;}function e5(m,l,j,h){var q=null,o=0;try{ef(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function aj(m,l,j,h){var q=null,o=0;try{o=ip(j,h|0)|0;}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return 0|0;}c[267168]=0;return o|0;}function bV(l,j,h){var o=null,m=0;try{m=jG(h|0)|0;}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return 0|0;}c[267168]=0;return m|0;}function dt(l,j,h){var o=null,m=0;try{m=jF(h|0)|0;}catch(wZ){o=wZ;o=$(o,l,j);m=oSlot;c[266746]=o;c[266747]=m;c[267168]=1;return 0|0;}c[267168]=0;return m|0;}function d8(m,l,j,h){var q=null,o=0;try{kE(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function b$(o,m,l,j,h){var s=null,q=0;try{cj(l|0,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function e4(o,m,l,j,h){var s=null,q=0;try{kF(l|0,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function d7(m,l,j,h){var q=null,o=0;try{kJ(j|0,h);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function e3(q,o,m,l,j,h){var t=null,s=0;try{rj(m|0,l|0,j|0,h|0);}catch(wZ){t=wZ;t=$(t,q,o);s=oSlot;c[266746]=t;c[266747]=s;c[267168]=1;return;}c[267168]=0;}function im(q,o,m,l,j,h){var t=null,s=0;try{io(m,l|0,j|0,h|0);}catch(wZ){t=wZ;t=$(t,q,o);s=oSlot;c[266746]=t;c[266747]=s;c[267168]=1;return;}c[267168]=0;}function il(j,h){var m=null,l=0;try{fW();}catch(wZ){m=wZ;m=$(m,j,h);l=oSlot;c[266746]=m;c[266747]=l;c[267168]=1;return;}c[267168]=0;}function cP(o,m,l,j,h){var s=null,q=0;try{jN(l|0,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function ij(q,o,m,l,j,h){var t=null,s=0;try{ik(m,l|0,j|0,h|0);}catch(wZ){t=wZ;t=$(t,q,o);s=oSlot;c[266746]=t;c[266747]=s;c[267168]=1;return;}c[267168]=0;}function ih(m,l,j,h){var q=null,o=0;try{ii(j,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function a1(j,h){var m=null,l=0;try{c2();}catch(wZ){m=wZ;m=$(m,j,h);l=oSlot;c[266746]=m;c[266747]=l;c[267168]=1;return;}c[267168]=0;}function an(m,l,j,h){var q=null,o=0;try{o=ig(j,h|0)|0;}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return 0|0;}c[267168]=0;return o|0;}function e2(o,m,l,j,h){var s=null,q=0;try{q=ie(l,j|0,h)|0;}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return 0|0;}c[267168]=0;return q|0;}function ic(s,q,o,m,l,j){var t=null,h=0;try{h=id(o,m|0,l|0,j)|0;}catch(wZ){t=wZ;t=$(t,s,q);h=oSlot;c[266746]=t;c[266747]=h;c[267168]=1;return 0|0;}c[267168]=0;return h|0;}function iD(q,o,m,l,j){var s=null,h=0;try{h=iE(m,l|0,j)|0;}catch(wZ){s=wZ;s=$(s,q,o);h=oSlot;c[266746]=s;c[266747]=h;c[267168]=1;return 0|0;}c[267168]=0;return h|0;}function fb(v,t,s,q,o,m,l,j,h){var x=null,w=0;try{nj(s|0,q|0,o|0,m|0,l|0,j|0,h|0);}catch(wZ){x=wZ;x=$(x,v,t);w=oSlot;c[266746]=x;c[266747]=w;c[267168]=1;return;}c[267168]=0;}function ds(s,q,o,m,l,j,h){var v=null,t=0;try{v=a;t=ib(o,m|0,l|0,j|0,h|0)|0;}catch(wZ){v=wZ;v=$(v,s,q);t=oSlot;c[266746]=v;c[266747]=t;c[267168]=1;return 0;}c[267168]=0;return t;}function dr(o,m,l,j,h){var s=null,q=0;try{q=ia(l,j|0,h)|0;}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return 0|0;}c[267168]=0;return q|0;}function dq(m,l,j,h){var q=null,o=0;try{o=h$(j,h|0)|0;}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return 0|0;}c[267168]=0;return o|0;}function e1(o,m,l,j,h){var s=null,q=0;try{q=h_(l,j|0,h)|0;}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return 0|0;}c[267168]=0;return q|0;}function e0(v,t,s,q,o,m,l,j,h){var x=null,w=0;try{na(s|0,q|0,o|0,m|0,l|0,j|0,h|0);}catch(wZ){x=wZ;x=$(x,v,t);w=oSlot;c[266746]=x;c[266747]=w;c[267168]=1;return;}c[267168]=0;}function dp(s,q,o,m,l,j,h){var v=null,t=0;try{v=a;t=h9(o,m|0,l|0,j|0,h|0)|0;}catch(wZ){v=wZ;v=$(v,s,q);t=oSlot;c[266746]=v;c[266747]=t;c[267168]=1;return 0;}c[267168]=0;return t;}function dz(m,l,j,h){var q=null,o=0;try{o=h8(j,h|0)|0;}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return 0|0;}c[267168]=0;return o|0;}function eZ(o,m,l,j,h){var s=null,q=0;try{h7(l,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function h6(w,v,t,s,q,o,m,l,j){var x=null,h=0;try{h=c6(t|0,s|0,q|0,o|0,m|0,l|0,j)|0;}catch(wZ){x=wZ;x=$(x,w,v);h=oSlot;c[266746]=x;c[266747]=h;c[267168]=1;return 0|0;}c[267168]=0;return h|0;}function eY(o,m,l,j,h){var s=null,q=0;try{q=m0(l|0,j|0,h|0)|0;}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return 0|0;}c[267168]=0;return q|0;}function eX(o,m,l,j,h){var s=null,q=0;try{h5(l,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function dn(o,m,l,j,h){var s=null,q=0;try{h4(l,j|0,h|0);}catch(wZ){s=wZ;s=$(s,o,m);q=oSlot;c[266746]=s;c[266747]=q;c[267168]=1;return;}c[267168]=0;}function h3(w,v,t,s,q,o,m,l,j){var x=null,h=0;try{h=c5(t|0,s|0,q|0,o|0,m|0,l|0,j)|0;}catch(wZ){x=wZ;x=$(x,w,v);h=oSlot;c[266746]=x;c[266747]=h;c[267168]=1;return 0|0;}c[267168]=0;return h|0;}function h2(w,v,t,s,q,o,m,l,j,h){var z=null,x=0;try{aE(t|0,s,q,o,m,l,j,h|0);}catch(wZ){z=wZ;z=$(z,w,v);x=oSlot;c[266746]=z;c[266747]=x;c[267168]=1;return;}c[267168]=0;}function h0(q,o,m,l,j,h){var t=null,s=0;try{h1(m,l|0,j|0,h);}catch(wZ){t=wZ;t=$(t,q,o);s=oSlot;c[266746]=t;c[266747]=s;c[267168]=1;return;}c[267168]=0;}function hZ(m,l,j,h){var q=null,o=0;try{jI(j|0,h|0);}catch(wZ){q=wZ;q=$(q,m,l);o=oSlot;c[266746]=q;c[266747]=o;c[267168]=1;return;}c[267168]=0;}function hX(v,t,s,q,o,m,l,j,h){var x=null,w=0;try{hY(s,q|0,o|0,m|0,l|0,j,h);}catch(wZ){x=wZ;x=$(x,v,t);w=oSlot;c[266746]=x;c[266747]=w;c[267168]=1;return;}c[267168]=0;}function aP(h){dQ(a,h>>0);}function bW(h){gj(a,h>>0);}function ab(h){by(a,h>>0);}var eS=null;var vL=vY(16);var b_=vL;var eU=nullObj;var cO=0;var db=16;var vK=new Uint8Array(16);var b9=vK;var da=nullObj;var eK=0;var hb=[{a0:0,i1:0}];function vX(){this.a0=null;this.a1=null;this.i2=0;this.a3=null;this.a4=0;this.a5=null;this.i6=0;this.i7=0;this.i8=0;this.a9=null;this.a10=nullArray;this.a10o=0;this.a11=nullArray;}function vW(obj){var a=[];a[0]=obj;obj.o=0;obj.a=a;a[1]=obj.a2;obj.a2.o=1;obj.a2.a=a;a[2]=obj.a4;obj.a4.o=2;obj.a4.a=a;return obj;}function vV(obj){var a=[];a[0]=obj;obj.o=0;obj.a=a;a[1]=obj.a2;obj.a2.o=1;obj.a2.a=a;a[2]=obj.a3;obj.a3.o=2;obj.a3.a=a;return obj;}function vY(e){var r=[];for(var i=0;i<e;i++)r[i]=new vX();return r;}function vZ(r,s,e){for(var i=s;i<e;i++)r[i]=new vX();return r;}function CheerpException(m){var instance=new Error('Uncaught C++ exception: '+m);instance.name='CheerpException';Object.setPrototypeOf(instance,Object.getPrototypeOf(this));if(Error.captureStackTrace){Error.captureStackTrace(instance, CheerpException);}return instance;}CheerpException.prototype=Object.create(Error.prototype);function wV(pages){try{var ret=w1.grow(pages);__heap=w1.buffer;wW(__heap);return ret;}catch(e){return -1;}}var a=null,c=null,__asm=null,__heap=null;function wX(){throw new Error('this should be unreachable');};var w1=new WebAssembly.Memory({initial:17,maximum:128});var kC=null;var dT=null;var oo=null;var aN=null;var bP=null;var iO=null;var f6=null;var pV=null;var pU=null;var pT=null;var jZ=null;var jY=null;var ma=null;var gf=null;var lU=null;var lT=null;var lS=null;var dS=null;var lV=null;var l0=null;var l5=null;var pN=null;var me=null;var ps=null;var pr=null;var pp=null;var mL=null;var pm=null;var pl=null;var g1=null;var eJ=null;var gZ=null;var pk=null;var mf=null;var mK=null;var pH=null;var pR=null;var pZ=null;var vJ=null;var y=null;var bM=null;var a2=null;var r8=null;var mb=null;var c1=null;var bo=null;var cc=null;var pL=null;var eq=null;var lF=null;var bF=null;var jD=null;var jE=null;var iF=null;var gn=null;var fu=null;var iQ=null;var iC=null;var ev=null;var dB=null;var iA=null;var kW=null;var fX=null;var gC=null;var os=null;var kL=null;var iv=null;var bB=null;var nB=null;var kN=null;var rn=null;var rm=null;var is=null;var on=null;var gy=null;var iG=null;var jM=null;var fY=null;var ef=null;var ip=null;var jG=null;var jF=null;var kE=null;var cj=null;var kF=null;var kJ=null;var rj=null;var io=null;var fW=null;var jN=null;var ik=null;var ii=null;var c2=null;var ig=null;var ie=null;var id=null;var iE=null;var nj=null;var ib=null;var ia=null;var h$=null;var h_=null;var na=null;var h9=null;var h8=null;var h7=null;var c6=null;var m0=null;var h5=null;var h4=null;var c5=null;var aE=null;var h1=null;var jI=null;var hY=null;var eraseEdgeW=wX;var eraseNodeW=wX;var fillModalWithEdgeW=wX;var fillModalWithNodeW=wX;var flipEdgePlugW=wX;var getConnectedEdgesW=wX;var getGraphJsonW=wX;var loadW=wX;var moveNodeW=wX;var newEdgeW=wX;var newNodeW=wX;var redoW=wX;var undoW=wX;var updateEdgeDataW=wX;var updateNodeDataW=wX;wX.promise=w0('app.wasm').then(h=>WebAssembly.instantiate(h,{i:{w1:w1,ab:ab,mk:mk,dU:dU,de:de,mz:mz,iN:iN,bW:bW,iI:iI,bh:bh,iP:iP,g7:g7,l_:l_,mi:mi,d$:d$,aP:aP,ct:ct,as:as,aK:aK,bx:bx,dy:dy,dx:dx,aZ:aZ,aJ:aJ,dw:dw,cS:cS,br:br,ap:ap,dv:dv,fa:fa,cs:cs,iB:iB,cR:cR,cb:cb,iz:iz,e$:e$,iy:iy,ix:ix,iw:iw,cQ:cQ,e_:e_,iu:iu,d_:d_,du:du,e9:e9,it:it,ca:ca,d9:d9,aU:aU,bs:bs,fc:fc,bL:bL,e8:e8,e7:e7,e6:e6,ir:ir,iq:iq,e5:e5,aj:aj,bV:bV,dt:dt,d8:d8,b$:b$,e4:e4,d7:d7,e3:e3,im:im,il:il,cP:cP,ij:ij,ih:ih,a1:a1,an:an,e2:e2,ic:ic,iD:iD,fb:fb,ds:ds,dr:dr,dq:dq,e1:e1,e0:e0,dp:dp,dz:dz,eZ:eZ,h6:h6,eY:eY,eX:eX,dn:dn,h3:h3,h2:h2,h0:h0,hZ:hZ,hX:hX,wV:wV,}})).then(h=>{__asm=h.instance.exports;__heap=w1.buffer;wW(__heap);kC=__asm.kC;dT=__asm.dT;oo=__asm.oo;aN=__asm.aN;bP=__asm.bP;iO=__asm.iO;f6=__asm.f6;pV=__asm.pV;pU=__asm.pU;pT=__asm.pT;jZ=__asm.jZ;jY=__asm.jY;ma=__asm.ma;gf=__asm.gf;lU=__asm.lU;lT=__asm.lT;lS=__asm.lS;dS=__asm.dS;lV=__asm.lV;l0=__asm.l0;l5=__asm.l5;pN=__asm.pN;me=__asm.me;ps=__asm.ps;pr=__asm.pr;pp=__asm.pp;mL=__asm.mL;pm=__asm.pm;pl=__asm.pl;g1=__asm.g1;eJ=__asm.eJ;gZ=__asm.gZ;pk=__asm.pk;mf=__asm.mf;mK=__asm.mK;pH=__asm.pH;pR=__asm.pR;pZ=__asm.pZ;vJ=__asm.vJ;y=__asm.y;bM=__asm.bM;a2=__asm.a2;r8=__asm.r8;mb=__asm.mb;c1=__asm.c1;bo=__asm.bo;cc=__asm.cc;pL=__asm.pL;eq=__asm.eq;lF=__asm.lF;bF=__asm.bF;jD=__asm.jD;jE=__asm.jE;iF=__asm.iF;gn=__asm.gn;fu=__asm.fu;iQ=__asm.iQ;iC=__asm.iC;ev=__asm.ev;dB=__asm.dB;iA=__asm.iA;kW=__asm.kW;fX=__asm.fX;gC=__asm.gC;os=__asm.os;kL=__asm.kL;iv=__asm.iv;bB=__asm.bB;nB=__asm.nB;kN=__asm.kN;rn=__asm.rn;rm=__asm.rm;is=__asm.is;on=__asm.on;gy=__asm.gy;iG=__asm.iG;jM=__asm.jM;fY=__asm.fY;ef=__asm.ef;ip=__asm.ip;jG=__asm.jG;jF=__asm.jF;kE=__asm.kE;cj=__asm.cj;kF=__asm.kF;kJ=__asm.kJ;rj=__asm.rj;io=__asm.io;fW=__asm.fW;jN=__asm.jN;ik=__asm.ik;ii=__asm.ii;c2=__asm.c2;ig=__asm.ig;ie=__asm.ie;id=__asm.id;iE=__asm.iE;nj=__asm.nj;ib=__asm.ib;ia=__asm.ia;h$=__asm.h$;h_=__asm.h_;na=__asm.na;h9=__asm.h9;h8=__asm.h8;h7=__asm.h7;c6=__asm.c6;m0=__asm.m0;h5=__asm.h5;h4=__asm.h4;c5=__asm.c5;aE=__asm.aE;h1=__asm.h1;jI=__asm.jI;hY=__asm.hY;eraseEdgeW=wa;eraseNodeW=wg;fillModalWithEdgeW=v7;fillModalWithNodeW=we;flipEdgePlugW=wf;getConnectedEdgesW=wb;getGraphJsonW=v6;loadW=v_;moveNodeW=wc;newEdgeW=wd;newNodeW=wh;redoW=v5;undoW=v$;updateEdgeDataW=v8;updateNodeDataW=v9;eraseEdgeW.promise=eraseNodeW.promise=fillModalWithEdgeW.promise=fillModalWithNodeW.promise=flipEdgePlugW.promise=getConnectedEdgesW.promise=getGraphJsonW.promise=loadW.promise=moveNodeW.promise=newEdgeW.promise=newNodeW.promise=redoW.promise=undoW.promise=updateEdgeDataW.promise=updateNodeDataW.promise=Promise.resolve();__asm.kC();});function wW(h){a=new Uint8Array(h);c=new Int32Array(h);}