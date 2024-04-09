{
  description = "A development shell for `nice!nano`";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    fenix.url = "github:nix-community/fenix";
    fenix.inputs.nixpkgs.follows = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, fenix, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ fenix.overlays.default ];
        };

      in
      with pkgs;
      {
        devShells.default = mkShell {
          packages =
            let
              rust-toolchain = fenix.packages.${system}.combine (with fenix.packages.${system}; [
                latest.toolchain
                targets.thumbv7em-none-eabihf.latest.rust-std
              ]);
            in
            [
              cargo-binutils
              cargo-make
              probe-rs
              dfu-util
              probe-run
              rust-toolchain
              stlink-gui
              elf2uf2-rs
            ];

          buildInputs = [
            pkg-config
            libudev-zero
            just
            adafruit-nrfutil
          ];

          shellHook = ''
            cat <<EOF
            Welcome to the ❄️ 'nice!nano' development shell.

            $(just -l |sed 's/^Available recipes:/The following `just` recipes are available:/')
            EOF
            user_shell=$(getent passwd "$(whoami)" |cut -d: -f 7)
            exec "$user_shell"
          '';
        };
      }
    );
}
