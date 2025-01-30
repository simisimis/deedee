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
    (footprint "1x12-1MP_P0.50mm_Horizontal"
    	(layer "${p.side}.Cu")
      (descr "1x12 P0.5mm horizontal FFC, FPC Connector")
      ${p.at}
      (tags "connector Hirose FH12 horizontal")
      (attr smd)

	    (property "Reference" "${p.ref}"
	      (at 0 0 ${p.r})
	      (layer "${p.side}.SilkS")
	      ${p.ref_hide}
	      (effects (font (size 1 1) (thickness 0.15)))
	    )
  (pad MP smd rect (at 4.65 1.4 ${p.rot}) (size 1.8 2.2) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste))
  (pad MP smd rect (at -4.65 1.4 ${p.rot}) (size 1.8 2.2) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste))
  (pad 1 smd rect (at -2.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P1.str})
  (pad 2 smd rect (at -2.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P2.str})
  (pad 3 smd rect (at -1.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P3.str})
  (pad 4 smd rect (at -1.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P4.str})
  (pad 5 smd rect (at -0.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P5.str})
  (pad 6 smd rect (at -0.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P6.str})
  (pad 7 smd rect (at 0.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P7.str})
  (pad 8 smd rect (at 0.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P8.str})
  (pad 9 smd rect (at 1.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P9.str})
  (pad 10 smd rect (at 1.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P10.str})
  (pad 11 smd rect (at 2.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P11.str})
  (pad 12 smd rect (at 2.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers "${p.side}.Cu" ${p.side}.Mask ${p.side}.Paste) ${p.P12.str})

    
  (fp_line (start 0 -1.2) (end -4.55 -1.2) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -4.55 -1.2) (end -4.55 3.4) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -4.55 3.4) (end -3.95 3.4) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -3.95 3.4) (end -3.95 3.7) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -3.95 3.7) (end -4.45 3.7) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -4.45 3.7) (end -4.45 4.4) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -4.45 4.4) (end 0 4.4) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 0 -1.2) (end 4.55 -1.2) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 4.55 -1.2) (end 4.55 3.4) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 4.55 3.4) (end 3.95 3.4) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 3.95 3.4) (end 3.95 3.7) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 3.95 3.7) (end 4.45 3.7) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 4.45 3.7) (end 4.45 4.4) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 4.45 4.4) (end 0 4.4) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -3.16 -1.3) (end -4.65 -1.3) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start -4.65 -1.3) (end -4.65 0.04) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 3.16 -1.3) (end 4.65 -1.3) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 4.65 -1.3) (end 4.65 0.04) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start -4.65 2.76) (end -4.65 4.5) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start -4.65 4.5) (end 4.65 4.5) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start 4.65 4.5) (end 4.65 2.76) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start -3.16 -1.3) (end -3.16 -2.5) (layer ${p.side}.SilkS) (width 0.12))
  (fp_line (start -3.25 -1.2) (end -2.75 -0.492893) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -2.75 -0.492893) (end -2.25 -1.2) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -6.05 -3) (end -6.05 4.9) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_line (start -6.05 4.9) (end 6.05 4.9) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_line (start 6.05 4.9) (end 6.05 -3) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_line (start 6.05 -3) (end -6.05 -3) (layer ${p.side}.CrtYd) (width 0.05))

  (fp_text user %R (at 0 3.7 ${p.rot}) (layer ${p.side}.Fab)
    (effects (font (size 1 1) (thickness 0.15)))
  )
	(fp_line
		(start -4.65 -1.3)
		(end -4.65 0.04)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "2c7ff141-8099-4a20-babf-3d315c9b384e")
	)
	(fp_line
		(start -4.65 2.76)
		(end -4.65 4.5)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "ca4a6e80-2d75-4fd3-9771-bb3f61652042")
	)
	(fp_line
		(start -4.65 4.5)
		(end 4.65 4.5)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "1315145a-564f-4fe2-b399-dc611a13c815")
	)
	(fp_line
		(start -3.16 -1.3)
		(end -4.65 -1.3)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "dbc716e7-8f27-4200-9867-321c63682891")
	)
	(fp_line
		(start -3.16 -1.3)
		(end -3.16 -2.5)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "238273a7-ce6b-46d0-beed-f1e0da23527f")
	)
	(fp_line
		(start 3.16 -1.3)
		(end 4.65 -1.3)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "aecd07f2-b7d0-4b03-8b2c-71db50460363")
	)
	(fp_line
		(start 4.65 -1.3)
		(end 4.65 0.04)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "f96358ab-5722-4a1c-9d6f-211b589780ca")
	)
	(fp_line
		(start 4.65 4.5)
		(end 4.65 2.76)
		(stroke
			(width 0.12)
			(type solid)
		)
		(layer "${p.side}.SilkS")
		(uuid "8886ee7f-e718-4d9a-9903-fbd2c3f4ab78")
	)
	(fp_line
		(start 22 9.986216)
		(end 30 9.986216)
		(stroke
			(width 0.1)
			(type default)
		)
		(layer "Dwgs.User")
		(uuid "8d8be890-9012-4274-8271-ddb5c5b42509")
	)
	(fp_line
		(start 22 29.986216)
		(end 22 9.986216)
		(stroke
			(width 0.1)
			(type default)
		)
		(layer "Dwgs.User")
		(uuid "d8713539-b2cd-43b3-b77a-18c138914048")
	)
	(fp_line
		(start 30 29.986216)
		(end 22 29.986216)
		(stroke
			(width 0.1)
			(type default)
		)
		(layer "Dwgs.User")
		(uuid "e71841eb-0f04-469c-b3be-79021880f8e8")
	)
	(fp_line
		(start 34 9.986216)
		(end 42 9.986216)
		(stroke
			(width 0.1)
			(type default)
		)
		(layer "Dwgs.User")
		(uuid "60e01b2b-f349-4c7a-8f70-b7271baa173d")
	)
	(fp_line
		(start 34 29.986216)
		(end 42 29.986216)
		(stroke
			(width 0.1)
			(type default)
		)
		(layer "Dwgs.User")
		(uuid "a2413faa-ca8e-4663-af5d-39038d077d24")
	)
	(fp_line
		(start 42 29.986216)
		(end 42 9.986216)
		(stroke
			(width 0.1)
			(type default)
		)
		(layer "Dwgs.User")
		(uuid "63489685-ad88-4095-b3e9-68f15da07b2f")
	)
	(fp_arc
		(start 30 9.986216)
		(mid 32 7.986216)
		(end 34 9.986216)
		(stroke
			(width 0.1)
			(type default)
		)
		(layer "Dwgs.User")
		(uuid "ac2b9e82-c9c5-4fa5-9e85-88b288863d33")
	)
	(fp_arc
		(start 34 29.986216)
		(mid 32 31.986216)
		(end 30 29.986216)
		(stroke
			(width 0.1)
			(type default)
		)
		(layer "Dwgs.User")
		(uuid "3f34d679-9952-4faf-87b6-e6a1a0cf2156")
	)
	(fp_poly
		(pts
			(arc
				(start 16.842567 30.918504)
				(mid 16.002186 31.072616)
				(end 16.08088 31.923379)
			)
			(arc
				(start 15.984361 32.029569)
				(mid -11.407683 36.43027)
				(end -16.878482 9.231729)
			)
			(arc
				(start -16.809899 9.138283)
				(mid -15.912743 9.000369)
				(end -16.051132 8.103286)
			)
			(arc
				(start -16.051132 8.103286)
				(mid -13.570603 5.334199)
				(end -10.619819 3.072839)
			)
			(arc
				(start -10.501925 2.991997)
				(mid -9.633439 3.152378)
				(end -9.476042 2.283346)
			)
			(arc
				(start -9.476042 2.283346)
				(mid 14.783757 6.398446)
				(end 16.842567 30.918503)
			)
		)
		(stroke
			(width 0.1)
			(type solid)
		)
		(fill none)
		(layer "Dwgs.User")
		(uuid "81951b72-3859-4b50-9b42-9fd80271843d")
	)
	(fp_rect
		(start -5.5 36)
		(end 5.5 37)
		(stroke
			(width 0.05)
			(type default)
		)
		(fill none)
		(layer "Edge.Cuts")
		(uuid "25b62e7d-e279-4440-8816-2cc1b50f43c7")
	)
	(fp_rect
		(start 34 13.586216)
		(end 41 26.386216)
		(stroke
			(width 0.1)
			(type default)
		)
		(fill none)
		(layer "Edge.Cuts")
		(uuid "63c605eb-b5b1-41bb-ba75-084c4de190b8")
	)
	(fp_line
		(start -6.05 -3)
		(end -6.05 4.9)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "${p.side}.CrtYd")
		(uuid "f884e5b1-4578-47c6-8ce5-0b72062d81ed")
	)
	(fp_line
		(start -6.05 4.9)
		(end 6.05 4.9)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "${p.side}.CrtYd")
		(uuid "830278e5-3a64-41c0-91b5-86ce543bb938")
	)
	(fp_line
		(start 6.05 -3)
		(end -6.05 -3)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "${p.side}.CrtYd")
		(uuid "5aabfdff-8b5a-4c31-a0e5-fc21bcf710df")
	)
	(fp_line
		(start 6.05 4.9)
		(end 6.05 -3)
		(stroke
			(width 0.05)
			(type solid)
		)
		(layer "${p.side}.CrtYd")
		(uuid "8a4d4667-a79e-41c0-9b06-9a343b06e129")
	)
	(fp_line
		(start -4.55 -1.2)
		(end -4.55 3.4)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "f1304815-9638-4b70-908b-816d71acba56")
	)
	(fp_line
		(start -4.55 3.4)
		(end -3.95 3.4)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "cfae5ff1-fcac-42dd-946c-3f0a7f4a8ff8")
	)
	(fp_line
		(start -4.45 3.7)
		(end -4.45 4.4)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "30db9938-2a43-4dcf-a50e-4407b9dde4aa")
	)
	(fp_line
		(start -4.45 4.4)
		(end 0 4.4)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "7e553f75-c9f7-4f5a-8048-74d577f2638b")
	)
	(fp_line
		(start -3.95 3.4)
		(end -3.95 3.7)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "305f1d60-3e00-4a44-bc60-7c845e705973")
	)
	(fp_line
		(start -3.95 3.7)
		(end -4.45 3.7)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "92e8f05d-af55-46a8-b89b-e682fd1f6c21")
	)
	(fp_line
		(start -3.25 -1.2)
		(end -2.75 -0.492893)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "4bc02b6c-3e30-4538-8d7c-0dbeef3b8b35")
	)
	(fp_line
		(start -2.75 -0.492893)
		(end -2.25 -1.2)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "c3c42baf-bc99-4f83-aeef-42d8ce5fda77")
	)
	(fp_line
		(start 0 -1.2)
		(end -4.55 -1.2)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "261dc048-bc02-42bd-a14a-e8cfc9b95353")
	)
	(fp_line
		(start 0 -1.2)
		(end 4.55 -1.2)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "b5932151-9169-4a88-ae9d-f06a59cf7e04")
	)
	(fp_line
		(start 3.95 3.4)
		(end 3.95 3.7)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "f77092b6-4d40-46da-b206-68e4bdbf4262")
	)
	(fp_line
		(start 3.95 3.7)
		(end 4.45 3.7)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "3e006574-0e3b-4152-a55a-0a07ee9dd402")
	)
	(fp_line
		(start 4.45 3.7)
		(end 4.45 4.4)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "c1e95169-deaa-4183-b4a3-df5bf4557dd2")
	)
	(fp_line
		(start 4.45 4.4)
		(end 0 4.4)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "47910ac5-86ff-4b85-b82c-307d9c476341")
	)
	(fp_line
		(start 4.55 -1.2)
		(end 4.55 3.4)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "e18d5b44-e8ab-4f44-8065-1acc8aba1312")
	)
	(fp_line
		(start 4.55 3.4)
		(end 3.95 3.4)
		(stroke
			(width 0.1)
			(type solid)
		)
		(layer "${p.side}.Fab")
		(uuid "367a9a17-fcd7-4a44-9e8f-03ac51ffcbe8")
	)
	(fp_circle
		(center 32 10)
		(end 33 10)
		(stroke
			(width 0.1)
			(type default)
		)
		(fill none)
		(layer "Edge.Cuts")
		(uuid "9e063adc-2bde-40a1-af22-8437b513df37")
	)
	(fp_circle
		(center 32 30)
		(end 33 30)
		(stroke
			(width 0.1)
			(type default)
		)
		(fill none)
		(layer "Edge.Cuts")
		(uuid "e9b0c5eb-ce69-451b-8dae-d1bc342ef502")
	)
	(model "\${KICAD8_3DMODEL_DIR}/Connector_FFC-FPC.3dshapes/Hirose_FH12-12S-0.5SH_1x12-1MP_P0.50mm_Horizontal.wrl"
		(offset
			(xyz 0 0 0)
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
