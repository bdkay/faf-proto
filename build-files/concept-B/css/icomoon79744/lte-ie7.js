/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */
window.onload=function(){function e(e,t){var n=e.innerHTML;e.innerHTML="<span style=\"font-family: 'icomoon'\">"+t+"</span>"+n}var t={"ic_triangle-up":"&#xe000;","ic_triangle-down":"&#xe001;","ic_sort-both":"&#xe002;",ic_exclamation:"&#xe003;",ic_envelope:"&#xe004;",ic_close:"&#xe005;","ic_arrow-left":"&#xe006;","ic_arrow-down":"&#xe007;",ic_sort_down:"&#xe008;",ic_pencil:"&#xe009;",ic_menu:"&#xe00a;",ic_magnify:"&#xe00b;",ic_graduation:"&#xe00d;",ic_flag:"&#xe00e;",ic_eye:"&#xe00f;","ic_chevron-up":"&#xe010;","ic_chevron-right":"&#xe011;","ic_chevron-left":"&#xe012;","ic_chevron-down":"&#xe013;",ic_checkmark:"&#xe014;",ic_camera:"&#xe015;","ic_arrow-up":"&#xe016;","ic_arrow-right":"&#xe017;","ic_sort-up":"&#xe00c;"},n=document.getElementsByTagName("*"),r,i,s,o,u;for(r=0;;r+=1){u=n[r];if(!u)break;i=u.getAttribute("data-icon"),i&&e(u,i),o=u.className,o=o.match(/ic_[^\s'"]+/),o&&t[o[0]]&&e(u,t[o[0]])}};