# Ergogen: generate PCB
build:
  pushd ./input && ../node_modules/.bin/ergogen . -o ../pcb/generated popd
  cp -f ./pcb/generated/pcbs/DeeDee.kicad_pcb ./pcb/manual/DeeDee.kicad_pcb
