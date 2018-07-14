// META: global=sharedworker
'use strict';

test(() => {
  assert_false('usb' in navigator);
  assert_false('USB' in this);
  assert_false('USBAlternateInterface' in this);
  assert_false('USBConfiguration' in this);
  assert_false('USBConnectionEvent' in this);
  assert_false('USBDevice' in this);
  assert_false('USBEndpoint' in this);
  assert_false('USBInterface' in this);
  assert_false('USBInTransferResult' in this);
  assert_false('USBOutTransferResult' in this);
  assert_false('USBIsochronousInTransferResult' in this);
  assert_false('USBIsochronousOutTransferResult' in this);
  assert_false('USBIsochronousInTransferPacket' in this);
  assert_false('USBIsochronousOutTransferPacket' in this);
}, 'WebUSB is not available in an insecure context');

done();
