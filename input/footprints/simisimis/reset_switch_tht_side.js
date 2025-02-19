module.exports = {
  params: {
    designator: 'RST',
    RST: { type: 'net', value: 'RST' },
    GND: { type: 'net', value: 'GND' },
  },
  body: p => {
    const footprint = `
    (footprint "SW_SKHLLCA010" (version 20221018) (generator pcbnew)
      (layer "F.Cu")
      (descr "alps SKHLLCA010 DIP pushbutton")
      ${p.at}
      (tags "alps tht dip pushbutton SPST")
      (attr through_hole)
      (fp_text value "RST" (at 0 1.55 ${p.r} unlocked) (layer "F.Fab")
          (effects (font (size 1 1) (thickness 0.15)))
        (tstamp f36ff46b-eee3-4796-93f5-ac798216c2cd)
      )
      (fp_line (start -3.9 -3.75) (end 3.9 -3.75)
        (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 6f35b074-7f05-4d7f-87a6-30d24ef23b26))
      (fp_line (start -3.9 -0.07) (end -3.9 -3.75)
        (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 06552535-6538-4737-8d72-ea3a2e26036c))
      (fp_line (start -2.25 0.55) (end 2.25 0.55)
        (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 04990ea5-4b3e-401a-9ab0-15fa8b7ac5a4))
      (fp_line (start 3.9 -0.07) (end 3.9 -3.75)
        (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 22a07d77-1386-496e-9509-d60374a833e3))
      (fp_line (start -1.25 -5) (end 1.25 -5)
        (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp d2fbd716-0905-4aa2-986f-e56c133da112))
      (fp_line (start -1.25 -3.75) (end -1.25 -5)
        (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp 224a65d4-8642-4437-b1cd-c6a0554a002f))
      (fp_line (start 1.25 -3.75) (end 1.25 -5)
        (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp 95f624a9-90c2-48bc-ad16-07991e469ce7))
      (fp_line (start -3.65 -4.97) (end -3.65 2.18)
        (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp afa4013f-c582-42ae-9397-c6616bc834cc))
      (fp_line (start -3.65 -4.97) (end 3.65 -4.97)
        (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 5719b54e-4b4b-4602-a94f-67763fdac277))
      (fp_line (start -3.65 2.18) (end 3.65 2.18)
        (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp ef4b2584-e89a-423d-b813-48019b1664f0))
      (fp_line (start 3.65 -4.97) (end 3.65 2.18)
        (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 9dbbb84f-bfa9-424e-804e-5a3facc16f67))
      (fp_line (start -3.9 -3.75) (end 3.9 -3.75)
        (stroke (width 0.12) (type solid)) (layer "F.Fab") (tstamp b5c3c533-2ad7-4c30-98f6-62532e454ef0))
      (fp_line (start -3.9 0.55) (end -3.9 -3.75)
        (stroke (width 0.12) (type solid)) (layer "F.Fab") (tstamp fa4037ec-5bfb-4f0f-b996-2cef68f21d76))
      (fp_line (start -3.9 0.55) (end 3.9 0.55)
        (stroke (width 0.12) (type solid)) (layer "F.Fab") (tstamp bbe359d6-0db3-4092-91f3-98f481cf1d4f))
      (fp_line (start -1.25 -5) (end 1.25 -5)
        (stroke (width 0.12) (type solid)) (layer "F.Fab") (tstamp c58be8af-84c5-4a83-9ad5-72095f9510d2))
      (fp_line (start -1.25 -3.75) (end -1.25 -5)
        (stroke (width 0.12) (type solid)) (layer "F.Fab") (tstamp cbe0ebdb-7463-49c6-b6be-08a5fc0b69c9))
      (fp_line (start 1.25 -3.75) (end 1.25 -5)
        (stroke (width 0.12) (type solid)) (layer "F.Fab") (tstamp 46f59287-2650-4c0e-bb85-f8ccb498dc9f))
      (fp_line (start 3.9 0.55) (end 3.9 -3.75)
        (stroke (width 0.12) (type solid)) (layer "F.Fab") (tstamp c54c25fd-be21-4f19-91f7-338086cda67b))
      (pad "1" thru_hole circle (at 2.5 -1.25 ${p.r}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.GND.str} (tstamp 29d34d49-e387-4544-973b-4d4d8d700d25))
      (pad "2" thru_hole circle (at -2.5 -1.25 ${p.r}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "B.Mask") ${p.RST.str} (tstamp 0b20e883-e2f1-4bbd-8e06-4a1b2ff48484))
      (pad "MP" thru_hole circle (at -3.5 1.25 ${p.r}) (size 2.1 2.1) (drill 1.3) (layers "*.Cu" "*.Mask") ${p.GND.str} (tstamp 3fc909a3-98d3-455b-b199-af32449c6052))
      (pad "MP" thru_hole circle (at 3.5 1.25 ${p.r}) (size 2.1 2.1) (drill 1.3) (layers "*.Cu" "*.Mask") ${p.GND.str} (tstamp aa3b7ce1-b931-4d73-8b8c-b7db55568d7c))
    	(model "\${KIPRJMOD}/../../kicad/3dmodels/SW_SKHLLC.step"
    		(offset
    			(xyz 0 3.2 2.5)
    		)
    		(scale
    			(xyz 1 1 1)
    		)
    		(rotate
    			(xyz 270 0 180)
    		)
    	)
    )
    `
    return footprint
  }
}
