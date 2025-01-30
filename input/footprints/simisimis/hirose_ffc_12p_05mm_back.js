module.exports = {
  params: {
    designator: 'FFC',
    side: 'F',
    P1: { type: 'net', value: 'P1' },
    P2: { type: 'net', value: 'P2' },
    P3: { type: 'net', value: 'P3' },
    P4: { type: 'net', value: 'P4' },
    P5: { type: 'net', value: 'P5' },
    P6: { type: 'net', value: 'P6' },
    P7: { type: 'net', value: 'P7' },
    P8: { type: 'net', value: 'P8' },
    P9: { type: 'net', value: 'P9' },
    P10: { type: 'net', value: 'P10' },
    P11: { type: 'net', value: 'P11' },
    P12: { type: 'net', value: 'P12' },
  },
  body: p => {
    const footprint = `
    (footprint "cirque_connector_12p_back"
    	(layer "${p.side}.Cu")
    	(descr "Hirose FH12, FFC/FPC connector, FH12-12S-0.5SH, 12 Pins per row (https://www.hirose.com/product/en/products/FH12/FH12-24S-0.5SH(55)/), generated with kicad-footprint-generator")
      ${p.at}
    	(tags "connector Hirose FH12 horizontal")
      (property "Reference" "${p.ref}"
          (at 0 4.8 ${p.r})
          (layer ${p.side}.SilkS)
          ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15)))
      )
    	(property "Value" "cirque_connector_12p_back"
    		(at 0 5.6 ${p.r})
    		(layer "${p.side}.Fab")
    		(effects
    			(font
    				(size 1 1)
    				(thickness 0.15)
    			)
    			(justify mirror)
    		)
    	)
    	(property "Footprint" ""
    		(at 0 4.9 ${p.r + 180})
    		(unlocked yes)
    		(layer "${p.side}.Fab")
    		(hide yes)
    		(effects
    			(font
    				(size 1.27 1.27)
    			)
    			(justify mirror)
    		)
    	)
    	(attr smd)

    	(fp_line(start -4.65 0.4)(end -4.65 2.14)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start -4.65 4.86)(end -4.65 6.2)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start -4.65 6.2)(end -3.16 6.2)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start -3.16 7.4)(end -3.16 6.2)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start 4.65 0.4)(end -4.65 0.4)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start 4.65 2.14)(end 4.65 0.4)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start 4.65 4.86)(end 4.65 6.2)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start 4.65 6.2)(end 3.16 6.2)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start 22 9.986216)(end 30 9.986216)(stroke(width 0.1)(type default))(layer "Dwgs.User"))
    	(fp_line(start 22 29.986216)(end 22 9.986216)(stroke(width 0.1)(type default))(layer "Dwgs.User"))
    	(fp_line(start 30 29.986216)(end 22 29.986216)(stroke(width 0.1)(type default))(layer "Dwgs.User"))
    	(fp_line(start 34 9.986216)(end 42 9.986216)(stroke(width 0.1)(type default))(layer "Dwgs.User"))
    	(fp_line(start 34 29.986216)(end 42 29.986216)(stroke(width 0.1)(type default))(layer "Dwgs.User"))
    	(fp_line(start 42 29.986216)(end 42 9.986216)(stroke(width 0.1)(type default))(layer "Dwgs.User"))
    	(fp_arc(start 30 9.986216)(mid 32 7.986216)(end 34 9.986216)(stroke(width 0.1)(type default))(layer "Dwgs.User"))
    	(fp_arc(start 34 29.986216)(mid 32 31.986216)(end 30 29.986216)(stroke(width 0.1)(type default))(layer "Dwgs.User"))

    	(fp_poly
    		(pts
      		(arc(start 16.842567 30.918504)(mid 16.002186 31.072616)(end 16.08088 31.923379))
      		(arc(start 15.984361 32.029569)(mid -11.407683 36.43027)(end -16.878482 9.231729))
      		(arc(start -16.809899 9.138283)(mid -15.912743 9.000369)(end -16.051132 8.103286))
      		(arc(start -16.051132 8.103286)(mid -13.570603 5.334199)(end -10.619819 3.072839))
      		(arc(start -10.501925 2.991997)(mid -9.633439 3.152378)(end -9.476042 2.283346))
      		(arc(start -9.476042 2.283346)(mid 14.783757 6.398446)(end 16.842567 30.918503))
    		)
    		(stroke (width 0.1) (type solid)) (fill none) (layer "Dwgs.User")
    	)
    	(fp_rect(start -5.5 36)(end 5.5 37)(stroke(width 0.05)(type default))(fill none)(layer "Edge.Cuts"))
    	(fp_rect(start 34 13.586216)(end 41 26.386216)(stroke(width 0.1)(type default))(fill none)(layer "Edge.Cuts"))
    	(fp_circle(center 32 10)(end 33 10)(stroke(width 0.1)(type default))(fill none)(layer "Edge.Cuts"))
    	(fp_circle(center 32 30)(end 33 30)(stroke(width 0.1)(type default))(fill none)(layer "Edge.Cuts"))
    	(fp_line(start -6.05 0)(end -6.05 7.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -6.05 7.9)(end 6.05 7.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 6.05 0)(end -6.05 0)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 6.05 7.9)(end 6.05 0)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -4.55 1.5)(end -4.55 6.1)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start -4.55 6.1)(end 0 6.1)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start -4.45 0.5)(end -4.45 1.2)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start -4.45 1.2)(end -3.95 1.2)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start -3.95 1.2)(end -3.95 1.5)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start -3.95 1.5)(end -4.55 1.5)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 2.75 5.346446)(end 2.25 6.053553)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 3.25 6.053553)(end 2.75 5.346446)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 0 0.5)(end -4.45 0.5)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 0 0.5)(end 4.45 0.5)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 3.95 1.2)(end 3.95 1.5)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 3.95 1.5)(end 4.55 1.5)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 4.45 0.5)(end 4.45 1.2)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 4.45 1.2)(end 3.95 1.2)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 4.55 1.5)(end 4.55 6.1)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 4.55 6.1)(end 0 6.1)(stroke(width 0.1)(type solid))(layer "${p.side}.Fab"))

    	(pad "1" smd rect(at 2.75 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P1.str})
    	(pad "2" smd rect(at 2.25 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P2.str})
    	(pad "3" smd rect(at 1.75 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P3.str})
    	(pad "4" smd rect(at 1.25 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P4.str})
    	(pad "5" smd rect(at 0.75 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P5.str})
    	(pad "6" smd rect(at 0.25 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P6.str})
    	(pad "7" smd rect(at -0.25 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P7.str})
    	(pad "8" smd rect(at -0.75 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P8.str})
    	(pad "9" smd rect(at -1.25 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P9.str})
    	(pad "10" smd rect(at -1.75 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P10.str})
    	(pad "11" smd rect(at -2.25 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P11.str})
    	(pad "12" smd rect(at -2.75 6.75 ${180 + p.rot})(size 0.3 1.3)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P12.str})
    	(pad "MP" smd rect(at -4.65 3.5 ${180 + p.rot})(size 1.8 2.2)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste))
    	(pad "MP" smd rect(at 4.65 3.5 ${180 + p.rot})(size 1.8 2.2)(layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste))
    	(model "\${KICAD8_3DMODEL_DIR}/Connector_FFC-FPC.3dshapes/Hirose_FH12-12S-0.5SH_1x12-1MP_P0.50mm_Horizontal.wrl"
    		(offset
    			(xyz 0 4.9 0)
    		)
    		(scale
    			(xyz 1 1 1)
    		)
    		(rotate
    			(xyz 0 0 0)
    		)
    	)
    )
    `
    return footprint;
  }
}
