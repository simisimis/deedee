module.exports = {
    params: {
      designator: 'JST',
      side: 'F',
      GND: {type: 'net', value: 'GND'},
      VCC: {type: 'net', value: 'VCC'},
      SDA: {type: 'net', value: 'SDA'},
      SCL: {type: 'net', value: 'SCL'},
    },
    body: p => {
      const standard = `
      (footprint "simisimis:jst-ph-smt-4p-2mm"
      	(layer "F.Cu")
      	${p.at}
      	(property "Reference" "${p.ref}"
      		(at -3.275 -4.385 ${p.r})
      		(layer "F.SilkS")
      		${p.ref_hide}
      		(effects (font (size 1 1) (thickness 0.15)))
        )
      	(property "Value" "JST-PH-SMT-4pin-2mm"
      		(at 2.75 6.4 0)
      		(layer "F.Fab")
      		(uuid "3d8edbc1-ca50-484c-a09b-38246afb248c")
      		(effects (font (size 1 1) (thickness 0.15)))
      	)
      	(attr smd)
      	(fp_line (start -5.975 -2.5) (end 5.975 -2.5) (stroke(width 0.127) (type solid)) (layer "F.SilkS")
      	  (uuid "00059ffa-4b7a-4e54-b4d5-fa1a93c7dae2")
      	)
      	(fp_line (start -5.975 -1.82) (end -5.975 -2.5) (stroke(width 0.127) (type solid)) (layer "F.SilkS")
      	  (uuid "870d020d-3c0b-475f-a128-ecb8050571a0")
      	)
      	(fp_line(start -5.975 2.5)(end -5.975 1.82)(stroke(width 0.127)(type solid))(layer "F.SilkS")(
      	  uuid "6854b2db-5a6d-43f2-8c1e-aaa621c9d5bd")
      	)
      	(fp_line(start -3.82 2.5)(end -5.975 2.5)(stroke(width 0.127)(type solid))(layer "F.SilkS")(
      	  uuid "53f9c731-988c-4eeb-945c-f2c9a32da40b")
      	)
      	(fp_line(start 5.975 -2.5)(end 5.975 -1.82)(stroke(width 0.127)(type solid))(layer "F.SilkS")(
      	  uuid "e3030a8a-ad1b-4e34-9eb0-865b36b56d43")
      	)
      	(fp_line(start 5.975 2.5)(end 3.82 2.5)(stroke(width 0.127)(type solid))(layer "F.SilkS")(
      	  uuid "70c04e98-50e8-4007-b1ed-a03e046546f5")
      	)
      	(fp_line(start 5.975 2.5)(end 5.975 1.82)(stroke(width 0.127)(type solid))(layer "F.SilkS")(
      	  uuid "7863ef2e-23a0-4b61-88c2-e3db3646f2ae")
      	)
      	(fp_circle(center -3 5.65)(end -2.9 5.65)(stroke(width 0.2)(type solid))(fill none)(layer "F.SilkS")(
      	  uuid "94860060-f087-462a-a1c9-114970dae375")
      	)
      	(fp_line(start -6.45 -2.75)(end -6.45 5.25)(stroke(width 0.05)(type solid))(layer "F.CrtYd")(
      	  uuid "26f61d14-db1e-4729-bc01-8af43ddba779")
      	)
      	(fp_line(start -6.45 5.25)(end 6.45 5.25)(stroke(width 0.05)(type solid))(layer "F.CrtYd")(
      	  uuid "df569efc-e0ef-4da3-8a52-60dcafaab2bb")
      	)
      	(fp_line(start 6.45 -2.75)(end -6.45 -2.75)(stroke(width 0.05)(type solid))(layer "F.CrtYd")(
      	  uuid "609c34d8-faca-4c42-9edb-500e590e6c43")
      	)
      	(fp_line(start 6.45 5.25)(end 6.45 -2.75)(stroke(width 0.05)(type solid))(layer "F.CrtYd")(
      	  uuid "0cbb9781-e05c-49d1-ab7b-4fadc7e51480")
      	)
      	(fp_line(start -5.975 -2.5)(end 5.975 -2.5)(stroke(width 0.127)(type solid))(layer "F.Fab")(
      	  uuid "a33c16ec-6b3e-4b51-9786-5196f2151bce")
      	)
      	(fp_line(start -5.975 2.5)(end -5.975 -2.5)(stroke(width 0.127)(type solid))(layer "F.Fab")(
      	  uuid "a02d6e0f-b40d-42a7-967e-c3523284df08")
      	)
      	(fp_line(start 5.975 -2.5)(end 5.975 2.5)(stroke(width 0.127)(type solid))(layer "F.Fab")(
      	  uuid "b9994137-1f22-4301-916f-93564e3b9d2a")
      	)
      	(fp_line(start 5.975 2.5)(end -5.975 2.5)(stroke(width 0.127)(type solid))(layer "F.Fab")(
      	  uuid "e2229aee-a950-4fd8-8b0b-a5cf2e7a91f0")
      	)
      	(pad "1" smd rect(at -3 2.25 ${p.r})(size 1 5.5)(layers "F.Cu" "F.Paste" "F.Mask") ${p.GND.str}
      	  (uuid "ccd47d91-cc53-432b-9fa4-934f3de84e2e")
      	)
      	(pad "2" smd rect(at -1 2.25 ${p.r})(size 1 5.5)(layers "F.Cu" "F.Paste" "F.Mask") ${p.VCC.str}
      	  (uuid "4f3b9750-bf7d-4186-9915-58c911a046c3")
      	)
      	(pad "3" smd rect(at 1 2.25 ${p.r})(size 1 5.5)(layers "F.Cu" "F.Paste" "F.Mask") ${p.SDA.str}
      	  (uuid "f25290f0-3502-421a-a217-06f289e1a76c")
      	)
      	(pad "4" smd rect(at 3 2.25 ${p.r})(size 1 5.5)(layers "F.Cu" "F.Paste" "F.Mask") ${p.SCL.str}
      	  (uuid "e3ce6d12-3e70-4e15-96e7-97d0030a424b")
      	)
      	(pad "SH1" smd rect(at -5.4 0 ${p.r})(size 1.6 3)(layers "F.Cu" "F.Paste" "F.Mask") ${p.GND.str}
      	  (uuid "7c469383-98bd-4795-9991-61390724468e")
      	)
      	(pad "SH2" smd rect(at 5.4 0 ${p.r})(size 1.6 3)(layers "F.Cu" "F.Paste" "F.Mask") ${p.GND.str}
      	  (uuid "0ef9a2e9-422c-455a-96db-76a88ecdb7de")
      	)
      	(model "\${KIPRJMOD}/../../kicad/3dmodels/S4B-PH-SM4-TB.step"
      		(offset
      			(xyz 0 0 0)
      		)
      		(scale
      			(xyz 1 1 1)
      		)
      		(rotate
      			(xyz 270 0 180)
      		)
      	)
      `
      return `
        ${standard}
				)
      `
    }
  }
