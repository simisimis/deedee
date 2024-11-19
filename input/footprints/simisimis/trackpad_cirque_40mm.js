module.exports = {
  params: {
    designator: 'FFC',
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
    (module Hirose_FH12-12S-0.5SH_1x12-1MP_P0.50mm_Horizontal (layer F.Cu) (tedit 5D24667B)
      (descr "1x12 P0.5mm horizontal FFC, FPC Connector")
      ${p.at /* parametric position */}
      (tags "connector Hirose FH12 horizontal")
      (attr smd)

      (fp_text reference ${p.ref} (at 0 -3.7) (layer F.SilkS) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value Hirose_FH12-12S-0.5SH_1x12-1MP_P0.50mm_Horizontal (at 0 5.6) (layer F.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
  (pad MP smd rect (at 4.65 1.4 ${p.rot}) (size 1.8 2.2) (layers F.Cu F.Mask F.Paste))
  (pad MP smd rect (at -4.65 1.4 ${p.rot}) (size 1.8 2.2) (layers F.Cu F.Mask F.Paste))
  (pad 1 smd rect (at -2.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P1.str})
  (pad 2 smd rect (at -2.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P2.str})
  (pad 3 smd rect (at -1.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P3.str})
  (pad 4 smd rect (at -1.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P4.str})
  (pad 5 smd rect (at -0.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P5.str})
  (pad 6 smd rect (at -0.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P6.str})
  (pad 7 smd rect (at 0.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P7.str})
  (pad 8 smd rect (at 0.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P8.str})
  (pad 9 smd rect (at 1.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P9.str})
  (pad 10 smd rect (at 1.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P10.str})
  (pad 11 smd rect (at 2.25 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P11.str})
  (pad 12 smd rect (at 2.75 -1.85 ${p.rot}) (size 0.3 1.3) (layers F.Cu F.Mask F.Paste) ${p.P12.str})

    
  (fp_line (start 0 -1.2) (end -4.55 -1.2) (layer F.Fab) (width 0.1))
  (fp_line (start -4.55 -1.2) (end -4.55 3.4) (layer F.Fab) (width 0.1))
  (fp_line (start -4.55 3.4) (end -3.95 3.4) (layer F.Fab) (width 0.1))
  (fp_line (start -3.95 3.4) (end -3.95 3.7) (layer F.Fab) (width 0.1))
  (fp_line (start -3.95 3.7) (end -4.45 3.7) (layer F.Fab) (width 0.1))
  (fp_line (start -4.45 3.7) (end -4.45 4.4) (layer F.Fab) (width 0.1))
  (fp_line (start -4.45 4.4) (end 0 4.4) (layer F.Fab) (width 0.1))
  (fp_line (start 0 -1.2) (end 4.55 -1.2) (layer F.Fab) (width 0.1))
  (fp_line (start 4.55 -1.2) (end 4.55 3.4) (layer F.Fab) (width 0.1))
  (fp_line (start 4.55 3.4) (end 3.95 3.4) (layer F.Fab) (width 0.1))
  (fp_line (start 3.95 3.4) (end 3.95 3.7) (layer F.Fab) (width 0.1))
  (fp_line (start 3.95 3.7) (end 4.45 3.7) (layer F.Fab) (width 0.1))
  (fp_line (start 4.45 3.7) (end 4.45 4.4) (layer F.Fab) (width 0.1))
  (fp_line (start 4.45 4.4) (end 0 4.4) (layer F.Fab) (width 0.1))
  (fp_line (start -3.16 -1.3) (end -4.65 -1.3) (layer F.SilkS) (width 0.12))
  (fp_line (start -4.65 -1.3) (end -4.65 0.04) (layer F.SilkS) (width 0.12))
  (fp_line (start 3.16 -1.3) (end 4.65 -1.3) (layer F.SilkS) (width 0.12))
  (fp_line (start 4.65 -1.3) (end 4.65 0.04) (layer F.SilkS) (width 0.12))
  (fp_line (start -4.65 2.76) (end -4.65 4.5) (layer F.SilkS) (width 0.12))
  (fp_line (start -4.65 4.5) (end 4.65 4.5) (layer F.SilkS) (width 0.12))
  (fp_line (start 4.65 4.5) (end 4.65 2.76) (layer F.SilkS) (width 0.12))
  (fp_line (start -3.16 -1.3) (end -3.16 -2.5) (layer F.SilkS) (width 0.12))
  (fp_line (start -3.25 -1.2) (end -2.75 -0.492893) (layer F.Fab) (width 0.1))
  (fp_line (start -2.75 -0.492893) (end -2.25 -1.2) (layer F.Fab) (width 0.1))
  (fp_line (start -6.05 -3) (end -6.05 4.9) (layer F.CrtYd) (width 0.05))
  (fp_line (start -6.05 4.9) (end 6.05 4.9) (layer F.CrtYd) (width 0.05))
  (fp_line (start 6.05 4.9) (end 6.05 -3) (layer F.CrtYd) (width 0.05))
  (fp_line (start 6.05 -3) (end -6.05 -3) (layer F.CrtYd) (width 0.05))

  (fp_text user %R (at 0 3.7 ${p.rot}) (layer F.Fab)
    (effects (font (size 1 1) (thickness 0.15)))
  )

    )
    `
    return footprint;
  }
}
