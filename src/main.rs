#![no_main]
#![no_std]

//#![allow(deprecated)] // to suppress "warning: use of deprecated item ... Users should use the traits in digital::v2.""

use core::panic::PanicInfo;
use cortex_m::asm;
use cortex_m_rt::entry;

use embedded_hal::digital::OutputPin;
use nrf52840_hal::gpio::*;
use nrf52840_hal::pac::Peripherals;

#[panic_handler]
fn panic(_info: &PanicInfo) -> ! {
    loop {
        asm::bkpt();
    }
}

#[entry]
fn main() -> ! {
    let p = Peripherals::take().unwrap();
    let p0 = p0::Parts::new(p.P0);

    let mut led = p0.p0_15.into_push_pull_output(Level::Low).degrade();

    loop {
        led.set_high().unwrap();
        asm::delay(10000000);
        led.set_low().unwrap();
        asm::delay(40000000);
    }
}
