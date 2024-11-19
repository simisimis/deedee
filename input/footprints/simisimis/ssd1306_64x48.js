module.exports = {
  params: {
    designator: 'OLED',
    P1: { type: 'net', value: 'P1' },
    P2: { type: 'net', value: 'P2' },
    P3: { type: 'net', value: 'P3' },
    P4: { type: 'net', value: 'P4' },
  },
  body: p => {
    const footprint = `
    (module "ssd1306 64x48 oled" (layer F.Cu) (tedit 5DA5FC0F)
      (descr "Seeed ssd1306 64x48 oled screen")
      ${p.at /* parametric position */}
      (tags "oled screen ssd1306 64x48")
      (attr smd)
      (fp_text reference ${p.ref} (at 0 0.5) (layer F.SilkS) ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text value "ssd1306 64x48 oled" (at 0 -0.5) (layer F.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_line (start -19 -6) (end 19 -6) (layer F.SilkS) (width 0.15))
      (fp_line (start -19 6) (end 19 6) (layer F.SilkS) (width 0.15))
      (fp_line (start -19 6) (end -19 -6) (layer F.SilkS) (width 0.15))
      (fp_line (start 19 6) (end 19 -6) (layer F.SilkS) (width 0.15))
      (fp_line (start -14 6) (end -14 -6) (layer F.SilkS) (width 0.15))

      (pad 4 thru_hole circle (at -17.5 -3.81 ${p.rot}) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.P1.str})
      (pad 3 thru_hole circle (at -17.5 -1.27 ${p.rot}) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.P1.str})
      (pad 2 thru_hole circle (at -17.5 1.27 ${p.rot}) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.P1.str})
      (pad 1 thru_hole circle (at -17.5 3.81 ${p.rot}) (size 1.524 1.524) (drill 0.762) (layers *.Cu *.Mask) ${p.P1.str})
    )
    `
    return footprint;
  }
}
