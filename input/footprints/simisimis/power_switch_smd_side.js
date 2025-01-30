module.exports = {
  params: {
    designator: 'PWR',
    side: 'B',
    PWR_IN: { type: 'net', value: 'BAT_P' },
    PWR_OUT: { type: 'net', value: 'RAW' },
  },
  body: p => {
    const footprint = `
    (footprint "SW_MSK12C02-HB" (version 20221018) (generator pcbnew)
      (layer "F.Cu")
      (descr "12V 50mA SMD toggle switch, available at LCSC/JLCPCB (C431541)")
      ${p.at}
      (tags "switch toggle smd ")
      (attr smd)
      (fp_text value "PWR" (at 0 2.75 ${p.r} unlocked) (layer "${p.side}.Fab")
          (effects (font (size 1 1) (thickness 0.15)))
        (tstamp 709a7ff6-beec-4931-899f-5a666e9ec532)
      )
    	(fp_line(start -3.55 -0.65)(end -3.55 0.65)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start -3.05 -1.55)(end 3.05 -1.55)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start -2.7 1.55)(end -3.05 1.55)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start 3.05 1.55)(end 2.7 1.55)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start 3.55 0.65)(end 3.55 -0.65)(stroke(width 0.12)(type solid))(layer "${p.side}.SilkS"))
    	(fp_line(start -3.4 -1.4)(end -3.4 1.4)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start -3.4 1.4)(end 3.4 1.4)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start -1.5 -2.9)(end -0.1 -2.9)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start -1.5 -1.4)(end -1.5 -2.9)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start -0.1 -2.9)(end -0.1 -1.4)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start 0.1 -2.9)(end 0.1 -1.4)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start 1.5 -2.9)(end 0.1 -2.9)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start 1.5 -1.4)(end 1.5 -2.9)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start 3.4 -1.4)(end -3.4 -1.4)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start 3.4 1.4)(end 3.4 -1.4)(stroke(width 0.08)(type solid))(layer "Dwgs.User"))
    	(fp_line(start -4 -1.4)(end -4 -0.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -4 -1.4)(end -1.5 -1.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -4 -0.9)(end -3.4 -0.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -4 0.9)(end -4 1.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -4 1.4)(end -2.55 1.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -3.4 -0.9)(end -3.4 0.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -3.4 0.9)(end -4 0.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -2.55 1.4)(end -2.55 2.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -2.55 2.4)(end -1.95 2.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -1.95 1.4)(end -1.95 2.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -1.95 1.4)(end 0.45 1.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -1.5 -2.9)(end 1.5 -2.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -1.5 -1.4)(end -1.5 -2.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 0.45 1.4)(end 0.45 2.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 0.45 2.4)(end 1.05 2.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 1.05 1.4)(end 1.05 2.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 1.05 1.4)(end 1.95 1.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 1.5 -2.9)(end 1.5 -1.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 1.5 -1.4)(end 4 -1.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 1.95 1.4)(end 1.95 2.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 1.95 2.4)(end 2.55 2.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 2.55 1.4)(end 2.55 2.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 3.4 -0.9)(end 3.4 0.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 3.4 -0.9)(end 4 -0.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 4 -0.9)(end 4 -1.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 4 0.9)(end 3.4 0.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 4 1.4)(end 2.55 1.4)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start 4 1.4)(end 4 0.9)(stroke(width 0.05)(type solid))(layer "${p.side}.CrtYd"))
    	(fp_line(start -3.4 -1.4)(end -3.4 1.4)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start -3.4 1.4)(end 3.4 1.4)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start -2.5 1.4)(end -2.25 0.9)(stroke(width 0.08)(type default))(layer "${p.side}.Fab"))
    	(fp_line(start -2.25 0.9)(end -2 1.4)(stroke(width 0.08)(type default))(layer "${p.side}.Fab"))
    	(fp_line(start -1.5 -2.9)(end -0.1 -2.9)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start -1.5 -1.4)(end -1.5 -2.9)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start -0.1 -2.9)(end -0.1 -1.4)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 0.1 -2.9)(end 0.1 -1.4)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 1.5 -2.9)(end 0.1 -2.9)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 1.5 -1.4)(end 1.5 -2.9)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 3.4 -1.4)(end -3.4 -1.4)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
    	(fp_line(start 3.4 1.4)(end 3.4 -1.4)(stroke(width 0.08)(type solid))(layer "${p.side}.Fab"))
	
    	(fp_text user "3"(at 0.75 -2.1 0)(unlocked yes)(layer "Dwgs.User")(effects(font(size 1 1)(thickness 0.15))))
    	(fp_text user "1"(at -0.8 -2.1 0)(unlocked yes)(layer "Dwgs.User")(effects(font(size 1 1)(thickness 0.15))))
	
    	(pad "1" smd roundrect(at -2.25 2 ${p.r+180})(size 0.6 1.25)(layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")(roundrect_rratio 0.15))
    	(pad "2" smd roundrect(at 0.75 2 ${p.r+180})(size 0.6 1.25)(layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")(roundrect_rratio 0.15) ${p.PWR_OUT.str} )
    	(pad "3" smd roundrect(at 2.25 2 ${p.r+180})(size 0.6 1.25)(layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")(roundrect_rratio 0.15) ${p.PWR_IN.str} )
    	(pad "MP" smd roundrect(at -3.7 -1.15 ${p.r+270})(size 0.7 1.1)(layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")(roundrect_rratio 0.15))
    	(pad "MP" smd roundrect(at -3.7 1.15 ${p.r+270})(size 0.7 1.1)(layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")(roundrect_rratio 0.15))
    	(pad "MP" smd roundrect(at 3.7 -1.15 ${p.r+270})(size 0.7 1.1)(layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")(roundrect_rratio 0.15))
    	(pad "MP" smd roundrect(at 3.7 1.15 ${p.r+270})(size 0.7 1.1)(layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask")(roundrect_rratio 0.15))

    	(model "\${KIPRJMOD}/../../kicad/3dmodels/SW_MSK12C02.step"
    		(offset
    			(xyz 0 0 -1.6)
    		)
    		(scale
    			(xyz 1 1 1)
    		)
    		(rotate
    			(xyz 180 0 180)
    		)
    	)
    )
    `
    return footprint
  }
}
