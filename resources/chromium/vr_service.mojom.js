// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'device/vr/public/mojom/vr_service.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../../mojo/public/mojom/base/time.mojom.js');
  }
  var mailbox_holder$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/mailbox_holder.mojom', '../../../../gpu/ipc/common/mailbox_holder.mojom.js');
  }
  var sync_token$ =
      mojo.internal.exposeNamespace('gpu.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'gpu/ipc/common/sync_token.mojom', '../../../../gpu/ipc/common/sync_token.mojom.js');
  }
  var display$ =
      mojo.internal.exposeNamespace('display.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/display/mojo/display.mojom', '../../../../ui/display/mojo/display.mojom.js');
  }
  var geometry$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/geometry/mojo/geometry.mojom', '../../../../ui/gfx/geometry/mojo/geometry.mojom.js');
  }
  var gpu_fence_handle$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/gpu_fence_handle.mojom', '../../../../ui/gfx/mojo/gpu_fence_handle.mojom.js');
  }
  var transform$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojo/transform.mojom', '../../../../ui/gfx/mojo/transform.mojom.js');
  }


  var XRHandedness = {};
  XRHandedness.NONE = 0;
  XRHandedness.LEFT = 1;
  XRHandedness.RIGHT = 2;

  XRHandedness.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  XRHandedness.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var XRTargetRayMode = {};
  XRTargetRayMode.GAZING = 1;
  XRTargetRayMode.POINTING = 2;
  XRTargetRayMode.TAPPING = 3;

  XRTargetRayMode.isKnownEnumValue = function(value) {
    switch (value) {
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  XRTargetRayMode.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VRDisplayFrameTransportMethod = {};
  VRDisplayFrameTransportMethod.NONE = 0;
  VRDisplayFrameTransportMethod.SUBMIT_AS_TEXTURE_HANDLE = 1;
  VRDisplayFrameTransportMethod.SUBMIT_AS_MAILBOX_HOLDER = 2;
  VRDisplayFrameTransportMethod.DRAW_INTO_TEXTURE_MAILBOX = 3;

  VRDisplayFrameTransportMethod.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  VRDisplayFrameTransportMethod.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var VRDisplayEventReason = {};
  VRDisplayEventReason.NONE = 0;
  VRDisplayEventReason.NAVIGATION = 1;
  VRDisplayEventReason.MOUNTED = 2;
  VRDisplayEventReason.UNMOUNTED = 3;

  VRDisplayEventReason.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  VRDisplayEventReason.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function XRSessionOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRSessionOptions.prototype.initDefaults_ = function() {
    this.immersive = false;
    this.hasUserActivation = false;
    this.useLegacyWebvrRenderPath = false;
  };
  XRSessionOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRSessionOptions.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  XRSessionOptions.encodedSize = codec.kStructHeaderSize + 8;

  XRSessionOptions.decode = function(decoder) {
    var packed;
    var val = new XRSessionOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.immersive = (packed >> 0) & 1 ? true : false;
    val.hasUserActivation = (packed >> 1) & 1 ? true : false;
    val.useLegacyWebvrRenderPath = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  XRSessionOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRSessionOptions.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.immersive & 1) << 0
    packed |= (val.hasUserActivation & 1) << 1
    packed |= (val.useLegacyWebvrRenderPath & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function XRSession(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRSession.prototype.initDefaults_ = function() {
    this.magicWindowProvider = new VRMagicWindowProviderPtr();
    this.connection = null;
  };
  XRSession.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRSession.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRSession.magicWindowProvider
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRSession.connection
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, XRPresentationConnection, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  XRSession.encodedSize = codec.kStructHeaderSize + 16;

  XRSession.decode = function(decoder) {
    var packed;
    var val = new XRSession();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.magicWindowProvider = decoder.decodeStruct(new codec.NullableInterface(VRMagicWindowProviderPtr));
    val.connection = decoder.decodeStructPointer(XRPresentationConnection);
    return val;
  };

  XRSession.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRSession.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.NullableInterface(VRMagicWindowProviderPtr), val.magicWindowProvider);
    encoder.encodeStructPointer(XRPresentationConnection, val.connection);
  };
  function XRPresentationConnection(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRPresentationConnection.prototype.initDefaults_ = function() {
    this.clientRequest = new bindings.InterfaceRequest();
    this.provider = new VRPresentationProviderPtr();
    this.transportOptions = null;
  };
  XRPresentationConnection.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRPresentationConnection.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRPresentationConnection.clientRequest
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRPresentationConnection.provider
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 4, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRPresentationConnection.transportOptions
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, VRDisplayFrameTransportOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  XRPresentationConnection.encodedSize = codec.kStructHeaderSize + 24;

  XRPresentationConnection.decode = function(decoder) {
    var packed;
    var val = new XRPresentationConnection();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.clientRequest = decoder.decodeStruct(codec.InterfaceRequest);
    val.provider = decoder.decodeStruct(new codec.Interface(VRPresentationProviderPtr));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.transportOptions = decoder.decodeStructPointer(VRDisplayFrameTransportOptions);
    return val;
  };

  XRPresentationConnection.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRPresentationConnection.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.clientRequest);
    encoder.encodeStruct(new codec.Interface(VRPresentationProviderPtr), val.provider);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(VRDisplayFrameTransportOptions, val.transportOptions);
  };
  function XRInputSourceDescription(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRInputSourceDescription.prototype.initDefaults_ = function() {
    this.targetRayMode = 0;
    this.handedness = 0;
    this.emulatedPosition = false;
    this.pointerOffset = null;
  };
  XRInputSourceDescription.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRInputSourceDescription.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRInputSourceDescription.targetRayMode
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, XRTargetRayMode);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRInputSourceDescription.handedness
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, XRHandedness);
    if (err !== validator.validationError.NONE)
        return err;



    // validate XRInputSourceDescription.pointerOffset
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, transform$.Transform, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  XRInputSourceDescription.encodedSize = codec.kStructHeaderSize + 24;

  XRInputSourceDescription.decode = function(decoder) {
    var packed;
    var val = new XRInputSourceDescription();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.targetRayMode = decoder.decodeStruct(codec.Int32);
    val.handedness = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.emulatedPosition = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.pointerOffset = decoder.decodeStructPointer(transform$.Transform);
    return val;
  };

  XRInputSourceDescription.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRInputSourceDescription.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.targetRayMode);
    encoder.encodeStruct(codec.Int32, val.handedness);
    packed = 0;
    packed |= (val.emulatedPosition & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(transform$.Transform, val.pointerOffset);
  };
  function XRInputSourceState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRInputSourceState.prototype.initDefaults_ = function() {
    this.sourceId = 0;
    this.primaryInputPressed = false;
    this.primaryInputClicked = false;
    this.description = null;
    this.grip = null;
  };
  XRInputSourceState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRInputSourceState.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate XRInputSourceState.description
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, XRInputSourceDescription, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRInputSourceState.grip
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, transform$.Transform, true);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  XRInputSourceState.encodedSize = codec.kStructHeaderSize + 24;

  XRInputSourceState.decode = function(decoder) {
    var packed;
    var val = new XRInputSourceState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.sourceId = decoder.decodeStruct(codec.Uint32);
    packed = decoder.readUint8();
    val.primaryInputPressed = (packed >> 0) & 1 ? true : false;
    val.primaryInputClicked = (packed >> 1) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.description = decoder.decodeStructPointer(XRInputSourceDescription);
    val.grip = decoder.decodeStructPointer(transform$.Transform);
    return val;
  };

  XRInputSourceState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRInputSourceState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.sourceId);
    packed = 0;
    packed |= (val.primaryInputPressed & 1) << 0
    packed |= (val.primaryInputClicked & 1) << 1
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(XRInputSourceDescription, val.description);
    encoder.encodeStructPointer(transform$.Transform, val.grip);
  };
  function VRFieldOfView(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRFieldOfView.prototype.initDefaults_ = function() {
    this.upDegrees = 0;
    this.downDegrees = 0;
    this.leftDegrees = 0;
    this.rightDegrees = 0;
  };
  VRFieldOfView.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRFieldOfView.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;





    return validator.validationError.NONE;
  };

  VRFieldOfView.encodedSize = codec.kStructHeaderSize + 16;

  VRFieldOfView.decode = function(decoder) {
    var packed;
    var val = new VRFieldOfView();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.upDegrees = decoder.decodeStruct(codec.Float);
    val.downDegrees = decoder.decodeStruct(codec.Float);
    val.leftDegrees = decoder.decodeStruct(codec.Float);
    val.rightDegrees = decoder.decodeStruct(codec.Float);
    return val;
  };

  VRFieldOfView.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRFieldOfView.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Float, val.upDegrees);
    encoder.encodeStruct(codec.Float, val.downDegrees);
    encoder.encodeStruct(codec.Float, val.leftDegrees);
    encoder.encodeStruct(codec.Float, val.rightDegrees);
  };
  function VRPose(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRPose.prototype.initDefaults_ = function() {
    this.orientation = null;
    this.position = null;
    this.angularVelocity = null;
    this.linearVelocity = null;
    this.angularAcceleration = null;
    this.linearAcceleration = null;
    this.inputState = null;
    this.poseReset = false;
  };
  VRPose.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRPose.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPose.orientation
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Float, true, [4], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPose.position
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Float, true, [3], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPose.angularVelocity
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 4, codec.Float, true, [3], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPose.linearVelocity
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 4, codec.Float, true, [3], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPose.angularAcceleration
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 4, codec.Float, true, [3], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPose.linearAcceleration
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 4, codec.Float, true, [3], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPose.inputState
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 48, 8, new codec.PointerTo(XRInputSourceState), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VRPose.encodedSize = codec.kStructHeaderSize + 64;

  VRPose.decode = function(decoder) {
    var packed;
    var val = new VRPose();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.orientation = decoder.decodeArrayPointer(codec.Float);
    val.position = decoder.decodeArrayPointer(codec.Float);
    val.angularVelocity = decoder.decodeArrayPointer(codec.Float);
    val.linearVelocity = decoder.decodeArrayPointer(codec.Float);
    val.angularAcceleration = decoder.decodeArrayPointer(codec.Float);
    val.linearAcceleration = decoder.decodeArrayPointer(codec.Float);
    val.inputState = decoder.decodeArrayPointer(new codec.PointerTo(XRInputSourceState));
    packed = decoder.readUint8();
    val.poseReset = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRPose.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRPose.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Float, val.orientation);
    encoder.encodeArrayPointer(codec.Float, val.position);
    encoder.encodeArrayPointer(codec.Float, val.angularVelocity);
    encoder.encodeArrayPointer(codec.Float, val.linearVelocity);
    encoder.encodeArrayPointer(codec.Float, val.angularAcceleration);
    encoder.encodeArrayPointer(codec.Float, val.linearAcceleration);
    encoder.encodeArrayPointer(new codec.PointerTo(XRInputSourceState), val.inputState);
    packed = 0;
    packed |= (val.poseReset & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function XRRay(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRRay.prototype.initDefaults_ = function() {
    this.origin = null;
    this.direction = null;
  };
  XRRay.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRRay.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRRay.origin
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Float, false, [3], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRRay.direction
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Float, false, [3], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  XRRay.encodedSize = codec.kStructHeaderSize + 16;

  XRRay.decode = function(decoder) {
    var packed;
    var val = new XRRay();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.origin = decoder.decodeArrayPointer(codec.Float);
    val.direction = decoder.decodeArrayPointer(codec.Float);
    return val;
  };

  XRRay.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRRay.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Float, val.origin);
    encoder.encodeArrayPointer(codec.Float, val.direction);
  };
  function XRHitResult(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRHitResult.prototype.initDefaults_ = function() {
    this.hitMatrix = null;
  };
  XRHitResult.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRHitResult.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRHitResult.hitMatrix
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Float, false, [16], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  XRHitResult.encodedSize = codec.kStructHeaderSize + 8;

  XRHitResult.decode = function(decoder) {
    var packed;
    var val = new XRHitResult();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.hitMatrix = decoder.decodeArrayPointer(codec.Float);
    return val;
  };

  XRHitResult.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRHitResult.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Float, val.hitMatrix);
  };
  function VRDisplayCapabilities(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayCapabilities.prototype.initDefaults_ = function() {
    this.hasPosition = false;
    this.hasExternalDisplay = false;
    this.canPresent = false;
    this.canProvidePassThroughImages = false;
  };
  VRDisplayCapabilities.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayCapabilities.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;





    return validator.validationError.NONE;
  };

  VRDisplayCapabilities.encodedSize = codec.kStructHeaderSize + 8;

  VRDisplayCapabilities.decode = function(decoder) {
    var packed;
    var val = new VRDisplayCapabilities();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.hasPosition = (packed >> 0) & 1 ? true : false;
    val.hasExternalDisplay = (packed >> 1) & 1 ? true : false;
    val.canPresent = (packed >> 2) & 1 ? true : false;
    val.canProvidePassThroughImages = (packed >> 3) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRDisplayCapabilities.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayCapabilities.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.hasPosition & 1) << 0
    packed |= (val.hasExternalDisplay & 1) << 1
    packed |= (val.canPresent & 1) << 2
    packed |= (val.canProvidePassThroughImages & 1) << 3
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VREyeParameters(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VREyeParameters.prototype.initDefaults_ = function() {
    this.fieldOfView = null;
    this.offset = null;
    this.renderWidth = 0;
    this.renderHeight = 0;
  };
  VREyeParameters.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VREyeParameters.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VREyeParameters.fieldOfView
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VRFieldOfView, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VREyeParameters.offset
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 4, codec.Float, false, [3], 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  VREyeParameters.encodedSize = codec.kStructHeaderSize + 24;

  VREyeParameters.decode = function(decoder) {
    var packed;
    var val = new VREyeParameters();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.fieldOfView = decoder.decodeStructPointer(VRFieldOfView);
    val.offset = decoder.decodeArrayPointer(codec.Float);
    val.renderWidth = decoder.decodeStruct(codec.Uint32);
    val.renderHeight = decoder.decodeStruct(codec.Uint32);
    return val;
  };

  VREyeParameters.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VREyeParameters.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VRFieldOfView, val.fieldOfView);
    encoder.encodeArrayPointer(codec.Float, val.offset);
    encoder.encodeStruct(codec.Uint32, val.renderWidth);
    encoder.encodeStruct(codec.Uint32, val.renderHeight);
  };
  function VRStageParameters(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRStageParameters.prototype.initDefaults_ = function() {
    this.standingTransform = null;
    this.sizeX = 0;
    this.sizeZ = 0;
  };
  VRStageParameters.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRStageParameters.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRStageParameters.standingTransform
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, codec.Float, false, [16], 0);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  VRStageParameters.encodedSize = codec.kStructHeaderSize + 16;

  VRStageParameters.decode = function(decoder) {
    var packed;
    var val = new VRStageParameters();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.standingTransform = decoder.decodeArrayPointer(codec.Float);
    val.sizeX = decoder.decodeStruct(codec.Float);
    val.sizeZ = decoder.decodeStruct(codec.Float);
    return val;
  };

  VRStageParameters.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRStageParameters.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(codec.Float, val.standingTransform);
    encoder.encodeStruct(codec.Float, val.sizeX);
    encoder.encodeStruct(codec.Float, val.sizeZ);
  };
  function VRDisplayInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayInfo.prototype.initDefaults_ = function() {
    this.index = 0;
    this.webvrDefaultFramebufferScale = 1.0;
    this.displayName = null;
    this.capabilities = null;
    this.stageParameters = null;
    this.leftEye = null;
    this.rightEye = null;
    this.webxrDefaultFramebufferScale = 1.0;
  };
  VRDisplayInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 64}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VRDisplayInfo.displayName
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayInfo.capabilities
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, VRDisplayCapabilities, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayInfo.stageParameters
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, VRStageParameters, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayInfo.leftEye
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, VREyeParameters, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayInfo.rightEye
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, VREyeParameters, true);
    if (err !== validator.validationError.NONE)
        return err;



    return validator.validationError.NONE;
  };

  VRDisplayInfo.encodedSize = codec.kStructHeaderSize + 56;

  VRDisplayInfo.decode = function(decoder) {
    var packed;
    var val = new VRDisplayInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.index = decoder.decodeStruct(codec.Uint32);
    val.webvrDefaultFramebufferScale = decoder.decodeStruct(codec.Float);
    val.displayName = decoder.decodeStruct(codec.String);
    val.capabilities = decoder.decodeStructPointer(VRDisplayCapabilities);
    val.stageParameters = decoder.decodeStructPointer(VRStageParameters);
    val.leftEye = decoder.decodeStructPointer(VREyeParameters);
    val.rightEye = decoder.decodeStructPointer(VREyeParameters);
    val.webxrDefaultFramebufferScale = decoder.decodeStruct(codec.Float);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRDisplayInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Uint32, val.index);
    encoder.encodeStruct(codec.Float, val.webvrDefaultFramebufferScale);
    encoder.encodeStruct(codec.String, val.displayName);
    encoder.encodeStructPointer(VRDisplayCapabilities, val.capabilities);
    encoder.encodeStructPointer(VRStageParameters, val.stageParameters);
    encoder.encodeStructPointer(VREyeParameters, val.leftEye);
    encoder.encodeStructPointer(VREyeParameters, val.rightEye);
    encoder.encodeStruct(codec.Float, val.webxrDefaultFramebufferScale);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VRDisplayFrameTransportOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayFrameTransportOptions.prototype.initDefaults_ = function() {
    this.transportMethod = 0;
    this.waitForTransferNotification = false;
    this.waitForRenderNotification = false;
    this.waitForGpuFence = false;
  };
  VRDisplayFrameTransportOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayFrameTransportOptions.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayFrameTransportOptions.transportMethod
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VRDisplayFrameTransportMethod);
    if (err !== validator.validationError.NONE)
        return err;




    return validator.validationError.NONE;
  };

  VRDisplayFrameTransportOptions.encodedSize = codec.kStructHeaderSize + 8;

  VRDisplayFrameTransportOptions.decode = function(decoder) {
    var packed;
    var val = new VRDisplayFrameTransportOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.transportMethod = decoder.decodeStruct(codec.Int32);
    packed = decoder.readUint8();
    val.waitForTransferNotification = (packed >> 0) & 1 ? true : false;
    val.waitForRenderNotification = (packed >> 1) & 1 ? true : false;
    val.waitForGpuFence = (packed >> 2) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRDisplayFrameTransportOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayFrameTransportOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.transportMethod);
    packed = 0;
    packed |= (val.waitForTransferNotification & 1) << 0
    packed |= (val.waitForRenderNotification & 1) << 1
    packed |= (val.waitForGpuFence & 1) << 2
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function XRFrameData(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  XRFrameData.prototype.initDefaults_ = function() {
    this.pose = null;
    this.timeDelta = null;
    this.bufferHolder = null;
    this.frameId = 0;
    this.bufferSize = null;
    this.projectionMatrix = null;
  };
  XRFrameData.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  XRFrameData.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 56}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRFrameData.pose
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VRPose, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRFrameData.timeDelta
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRFrameData.bufferHolder
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, mailbox_holder$.MailboxHolder, true);
    if (err !== validator.validationError.NONE)
        return err;



    // validate XRFrameData.bufferSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, geometry$.Size, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate XRFrameData.projectionMatrix
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 4, codec.Float, true, [16], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  XRFrameData.encodedSize = codec.kStructHeaderSize + 48;

  XRFrameData.decode = function(decoder) {
    var packed;
    var val = new XRFrameData();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.pose = decoder.decodeStructPointer(VRPose);
    val.timeDelta = decoder.decodeStructPointer(time$.TimeDelta);
    val.bufferHolder = decoder.decodeStructPointer(mailbox_holder$.MailboxHolder);
    val.frameId = decoder.decodeStruct(codec.Int16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.bufferSize = decoder.decodeStructPointer(geometry$.Size);
    val.projectionMatrix = decoder.decodeArrayPointer(codec.Float);
    return val;
  };

  XRFrameData.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(XRFrameData.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VRPose, val.pose);
    encoder.encodeStructPointer(time$.TimeDelta, val.timeDelta);
    encoder.encodeStructPointer(mailbox_holder$.MailboxHolder, val.bufferHolder);
    encoder.encodeStruct(codec.Int16, val.frameId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.Size, val.bufferSize);
    encoder.encodeArrayPointer(codec.Float, val.projectionMatrix);
  };
  function VRService_SetClient_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRService_SetClient_Params.prototype.initDefaults_ = function() {
    this.client = new VRServiceClientPtr();
  };
  VRService_SetClient_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRService_SetClient_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRService_SetClient_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRService_SetClient_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRService_SetClient_Params.decode = function(decoder) {
    var packed;
    var val = new VRService_SetClient_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client = decoder.decodeStruct(new codec.Interface(VRServiceClientPtr));
    return val;
  };

  VRService_SetClient_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRService_SetClient_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(VRServiceClientPtr), val.client);
  };
  function VRService_SetClient_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRService_SetClient_ResponseParams.prototype.initDefaults_ = function() {
  };
  VRService_SetClient_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRService_SetClient_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRService_SetClient_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  VRService_SetClient_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VRService_SetClient_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VRService_SetClient_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRService_SetClient_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function VRService_SetListeningForActivate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRService_SetListeningForActivate_Params.prototype.initDefaults_ = function() {
    this.listening = false;
  };
  VRService_SetListeningForActivate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRService_SetListeningForActivate_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VRService_SetListeningForActivate_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRService_SetListeningForActivate_Params.decode = function(decoder) {
    var packed;
    var val = new VRService_SetListeningForActivate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.listening = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRService_SetListeningForActivate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRService_SetListeningForActivate_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.listening & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VRServiceClient_OnDisplayConnected_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRServiceClient_OnDisplayConnected_Params.prototype.initDefaults_ = function() {
    this.display = new VRDisplayHostPtr();
    this.request = new bindings.InterfaceRequest();
    this.displayInfo = null;
  };
  VRServiceClient_OnDisplayConnected_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRServiceClient_OnDisplayConnected_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRServiceClient_OnDisplayConnected_Params.display
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRServiceClient_OnDisplayConnected_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRServiceClient_OnDisplayConnected_Params.displayInfo
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, VRDisplayInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRServiceClient_OnDisplayConnected_Params.encodedSize = codec.kStructHeaderSize + 24;

  VRServiceClient_OnDisplayConnected_Params.decode = function(decoder) {
    var packed;
    var val = new VRServiceClient_OnDisplayConnected_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.display = decoder.decodeStruct(new codec.Interface(VRDisplayHostPtr));
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.displayInfo = decoder.decodeStructPointer(VRDisplayInfo);
    return val;
  };

  VRServiceClient_OnDisplayConnected_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRServiceClient_OnDisplayConnected_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(VRDisplayHostPtr), val.display);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(VRDisplayInfo, val.displayInfo);
  };
  function VRSubmitFrameClient_OnSubmitFrameTransferred_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRSubmitFrameClient_OnSubmitFrameTransferred_Params.prototype.initDefaults_ = function() {
    this.success = false;
  };
  VRSubmitFrameClient_OnSubmitFrameTransferred_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRSubmitFrameClient_OnSubmitFrameTransferred_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VRSubmitFrameClient_OnSubmitFrameTransferred_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRSubmitFrameClient_OnSubmitFrameTransferred_Params.decode = function(decoder) {
    var packed;
    var val = new VRSubmitFrameClient_OnSubmitFrameTransferred_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.success = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRSubmitFrameClient_OnSubmitFrameTransferred_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRSubmitFrameClient_OnSubmitFrameTransferred_Params.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.success & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VRSubmitFrameClient_OnSubmitFrameRendered_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRSubmitFrameClient_OnSubmitFrameRendered_Params.prototype.initDefaults_ = function() {
  };
  VRSubmitFrameClient_OnSubmitFrameRendered_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRSubmitFrameClient_OnSubmitFrameRendered_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRSubmitFrameClient_OnSubmitFrameRendered_Params.encodedSize = codec.kStructHeaderSize + 0;

  VRSubmitFrameClient_OnSubmitFrameRendered_Params.decode = function(decoder) {
    var packed;
    var val = new VRSubmitFrameClient_OnSubmitFrameRendered_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VRSubmitFrameClient_OnSubmitFrameRendered_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRSubmitFrameClient_OnSubmitFrameRendered_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VRSubmitFrameClient_OnSubmitFrameGpuFence_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRSubmitFrameClient_OnSubmitFrameGpuFence_Params.prototype.initDefaults_ = function() {
    this.gpuFenceHandle = null;
  };
  VRSubmitFrameClient_OnSubmitFrameGpuFence_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRSubmitFrameClient_OnSubmitFrameGpuFence_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRSubmitFrameClient_OnSubmitFrameGpuFence_Params.gpuFenceHandle
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, gpu_fence_handle$.GpuFenceHandle, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRSubmitFrameClient_OnSubmitFrameGpuFence_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRSubmitFrameClient_OnSubmitFrameGpuFence_Params.decode = function(decoder) {
    var packed;
    var val = new VRSubmitFrameClient_OnSubmitFrameGpuFence_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.gpuFenceHandle = decoder.decodeStructPointer(gpu_fence_handle$.GpuFenceHandle);
    return val;
  };

  VRSubmitFrameClient_OnSubmitFrameGpuFence_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRSubmitFrameClient_OnSubmitFrameGpuFence_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(gpu_fence_handle$.GpuFenceHandle, val.gpuFenceHandle);
  };
  function VRDisplayHost_RequestSession_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayHost_RequestSession_Params.prototype.initDefaults_ = function() {
    this.options = null;
    this.triggeredByDisplayactive = false;
  };
  VRDisplayHost_RequestSession_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayHost_RequestSession_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayHost_RequestSession_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, XRSessionOptions, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VRDisplayHost_RequestSession_Params.encodedSize = codec.kStructHeaderSize + 16;

  VRDisplayHost_RequestSession_Params.decode = function(decoder) {
    var packed;
    var val = new VRDisplayHost_RequestSession_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(XRSessionOptions);
    packed = decoder.readUint8();
    val.triggeredByDisplayactive = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRDisplayHost_RequestSession_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayHost_RequestSession_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(XRSessionOptions, val.options);
    packed = 0;
    packed |= (val.triggeredByDisplayactive & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VRDisplayHost_RequestSession_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayHost_RequestSession_ResponseParams.prototype.initDefaults_ = function() {
    this.session = null;
  };
  VRDisplayHost_RequestSession_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayHost_RequestSession_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayHost_RequestSession_ResponseParams.session
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, XRSession, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRDisplayHost_RequestSession_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VRDisplayHost_RequestSession_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VRDisplayHost_RequestSession_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.session = decoder.decodeStructPointer(XRSession);
    return val;
  };

  VRDisplayHost_RequestSession_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayHost_RequestSession_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(XRSession, val.session);
  };
  function VRDisplayHost_SupportsSession_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayHost_SupportsSession_Params.prototype.initDefaults_ = function() {
    this.options = null;
  };
  VRDisplayHost_SupportsSession_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayHost_SupportsSession_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayHost_SupportsSession_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, XRSessionOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRDisplayHost_SupportsSession_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRDisplayHost_SupportsSession_Params.decode = function(decoder) {
    var packed;
    var val = new VRDisplayHost_SupportsSession_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.options = decoder.decodeStructPointer(XRSessionOptions);
    return val;
  };

  VRDisplayHost_SupportsSession_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayHost_SupportsSession_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(XRSessionOptions, val.options);
  };
  function VRDisplayHost_SupportsSession_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayHost_SupportsSession_ResponseParams.prototype.initDefaults_ = function() {
    this.supportsSession = false;
  };
  VRDisplayHost_SupportsSession_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayHost_SupportsSession_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VRDisplayHost_SupportsSession_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VRDisplayHost_SupportsSession_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VRDisplayHost_SupportsSession_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.supportsSession = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRDisplayHost_SupportsSession_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayHost_SupportsSession_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.supportsSession & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VRDisplayHost_ExitPresent_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayHost_ExitPresent_Params.prototype.initDefaults_ = function() {
  };
  VRDisplayHost_ExitPresent_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayHost_ExitPresent_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRDisplayHost_ExitPresent_Params.encodedSize = codec.kStructHeaderSize + 0;

  VRDisplayHost_ExitPresent_Params.decode = function(decoder) {
    var packed;
    var val = new VRDisplayHost_ExitPresent_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VRDisplayHost_ExitPresent_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayHost_ExitPresent_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VRMagicWindowProvider_GetFrameData_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRMagicWindowProvider_GetFrameData_Params.prototype.initDefaults_ = function() {
  };
  VRMagicWindowProvider_GetFrameData_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRMagicWindowProvider_GetFrameData_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRMagicWindowProvider_GetFrameData_Params.encodedSize = codec.kStructHeaderSize + 0;

  VRMagicWindowProvider_GetFrameData_Params.decode = function(decoder) {
    var packed;
    var val = new VRMagicWindowProvider_GetFrameData_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VRMagicWindowProvider_GetFrameData_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRMagicWindowProvider_GetFrameData_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VRMagicWindowProvider_GetFrameData_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRMagicWindowProvider_GetFrameData_ResponseParams.prototype.initDefaults_ = function() {
    this.frameData = null;
  };
  VRMagicWindowProvider_GetFrameData_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRMagicWindowProvider_GetFrameData_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRMagicWindowProvider_GetFrameData_ResponseParams.frameData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, XRFrameData, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRMagicWindowProvider_GetFrameData_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VRMagicWindowProvider_GetFrameData_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VRMagicWindowProvider_GetFrameData_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameData = decoder.decodeStructPointer(XRFrameData);
    return val;
  };

  VRMagicWindowProvider_GetFrameData_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRMagicWindowProvider_GetFrameData_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(XRFrameData, val.frameData);
  };
  function VRMagicWindowProvider_UpdateSessionGeometry_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRMagicWindowProvider_UpdateSessionGeometry_Params.prototype.initDefaults_ = function() {
    this.frameSize = null;
    this.displayRotation = 0;
  };
  VRMagicWindowProvider_UpdateSessionGeometry_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRMagicWindowProvider_UpdateSessionGeometry_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRMagicWindowProvider_UpdateSessionGeometry_Params.frameSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRMagicWindowProvider_UpdateSessionGeometry_Params.displayRotation
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 8, display$.Rotation);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRMagicWindowProvider_UpdateSessionGeometry_Params.encodedSize = codec.kStructHeaderSize + 16;

  VRMagicWindowProvider_UpdateSessionGeometry_Params.decode = function(decoder) {
    var packed;
    var val = new VRMagicWindowProvider_UpdateSessionGeometry_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameSize = decoder.decodeStructPointer(geometry$.Size);
    val.displayRotation = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRMagicWindowProvider_UpdateSessionGeometry_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRMagicWindowProvider_UpdateSessionGeometry_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(geometry$.Size, val.frameSize);
    encoder.encodeStruct(codec.Int32, val.displayRotation);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VRMagicWindowProvider_RequestHitTest_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRMagicWindowProvider_RequestHitTest_Params.prototype.initDefaults_ = function() {
    this.ray = null;
  };
  VRMagicWindowProvider_RequestHitTest_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRMagicWindowProvider_RequestHitTest_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRMagicWindowProvider_RequestHitTest_Params.ray
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, XRRay, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRMagicWindowProvider_RequestHitTest_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRMagicWindowProvider_RequestHitTest_Params.decode = function(decoder) {
    var packed;
    var val = new VRMagicWindowProvider_RequestHitTest_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.ray = decoder.decodeStructPointer(XRRay);
    return val;
  };

  VRMagicWindowProvider_RequestHitTest_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRMagicWindowProvider_RequestHitTest_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(XRRay, val.ray);
  };
  function VRMagicWindowProvider_RequestHitTest_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRMagicWindowProvider_RequestHitTest_ResponseParams.prototype.initDefaults_ = function() {
    this.results = null;
  };
  VRMagicWindowProvider_RequestHitTest_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRMagicWindowProvider_RequestHitTest_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRMagicWindowProvider_RequestHitTest_ResponseParams.results
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(XRHitResult), true, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRMagicWindowProvider_RequestHitTest_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VRMagicWindowProvider_RequestHitTest_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VRMagicWindowProvider_RequestHitTest_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.results = decoder.decodeArrayPointer(new codec.PointerTo(XRHitResult));
    return val;
  };

  VRMagicWindowProvider_RequestHitTest_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRMagicWindowProvider_RequestHitTest_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(XRHitResult), val.results);
  };
  function VRPresentationProvider_GetFrameData_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRPresentationProvider_GetFrameData_Params.prototype.initDefaults_ = function() {
  };
  VRPresentationProvider_GetFrameData_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRPresentationProvider_GetFrameData_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRPresentationProvider_GetFrameData_Params.encodedSize = codec.kStructHeaderSize + 0;

  VRPresentationProvider_GetFrameData_Params.decode = function(decoder) {
    var packed;
    var val = new VRPresentationProvider_GetFrameData_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VRPresentationProvider_GetFrameData_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRPresentationProvider_GetFrameData_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VRPresentationProvider_GetFrameData_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRPresentationProvider_GetFrameData_ResponseParams.prototype.initDefaults_ = function() {
    this.frameData = null;
  };
  VRPresentationProvider_GetFrameData_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRPresentationProvider_GetFrameData_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPresentationProvider_GetFrameData_ResponseParams.frameData
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, XRFrameData, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRPresentationProvider_GetFrameData_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VRPresentationProvider_GetFrameData_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VRPresentationProvider_GetFrameData_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameData = decoder.decodeStructPointer(XRFrameData);
    return val;
  };

  VRPresentationProvider_GetFrameData_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRPresentationProvider_GetFrameData_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(XRFrameData, val.frameData);
  };
  function VRPresentationProvider_UpdateLayerBounds_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRPresentationProvider_UpdateLayerBounds_Params.prototype.initDefaults_ = function() {
    this.frameId = 0;
    this.leftBounds = null;
    this.rightBounds = null;
    this.sourceSize = null;
  };
  VRPresentationProvider_UpdateLayerBounds_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRPresentationProvider_UpdateLayerBounds_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VRPresentationProvider_UpdateLayerBounds_Params.leftBounds
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPresentationProvider_UpdateLayerBounds_Params.rightBounds
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, geometry$.RectF, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPresentationProvider_UpdateLayerBounds_Params.sourceSize
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, geometry$.Size, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRPresentationProvider_UpdateLayerBounds_Params.encodedSize = codec.kStructHeaderSize + 32;

  VRPresentationProvider_UpdateLayerBounds_Params.decode = function(decoder) {
    var packed;
    var val = new VRPresentationProvider_UpdateLayerBounds_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameId = decoder.decodeStruct(codec.Int16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.leftBounds = decoder.decodeStructPointer(geometry$.RectF);
    val.rightBounds = decoder.decodeStructPointer(geometry$.RectF);
    val.sourceSize = decoder.decodeStructPointer(geometry$.Size);
    return val;
  };

  VRPresentationProvider_UpdateLayerBounds_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRPresentationProvider_UpdateLayerBounds_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int16, val.frameId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(geometry$.RectF, val.leftBounds);
    encoder.encodeStructPointer(geometry$.RectF, val.rightBounds);
    encoder.encodeStructPointer(geometry$.Size, val.sourceSize);
  };
  function VRPresentationProvider_SubmitFrameMissing_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRPresentationProvider_SubmitFrameMissing_Params.prototype.initDefaults_ = function() {
    this.frameId = 0;
    this.syncToken = null;
  };
  VRPresentationProvider_SubmitFrameMissing_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRPresentationProvider_SubmitFrameMissing_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VRPresentationProvider_SubmitFrameMissing_Params.syncToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, sync_token$.SyncToken, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRPresentationProvider_SubmitFrameMissing_Params.encodedSize = codec.kStructHeaderSize + 16;

  VRPresentationProvider_SubmitFrameMissing_Params.decode = function(decoder) {
    var packed;
    var val = new VRPresentationProvider_SubmitFrameMissing_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameId = decoder.decodeStruct(codec.Int16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.syncToken = decoder.decodeStructPointer(sync_token$.SyncToken);
    return val;
  };

  VRPresentationProvider_SubmitFrameMissing_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRPresentationProvider_SubmitFrameMissing_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int16, val.frameId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(sync_token$.SyncToken, val.syncToken);
  };
  function VRPresentationProvider_SubmitFrame_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRPresentationProvider_SubmitFrame_Params.prototype.initDefaults_ = function() {
    this.frameId = 0;
    this.mailboxHolder = null;
    this.timeWaited = null;
  };
  VRPresentationProvider_SubmitFrame_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRPresentationProvider_SubmitFrame_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VRPresentationProvider_SubmitFrame_Params.mailboxHolder
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, mailbox_holder$.MailboxHolder, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPresentationProvider_SubmitFrame_Params.timeWaited
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRPresentationProvider_SubmitFrame_Params.encodedSize = codec.kStructHeaderSize + 24;

  VRPresentationProvider_SubmitFrame_Params.decode = function(decoder) {
    var packed;
    var val = new VRPresentationProvider_SubmitFrame_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameId = decoder.decodeStruct(codec.Int16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.mailboxHolder = decoder.decodeStructPointer(mailbox_holder$.MailboxHolder);
    val.timeWaited = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  VRPresentationProvider_SubmitFrame_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRPresentationProvider_SubmitFrame_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int16, val.frameId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(mailbox_holder$.MailboxHolder, val.mailboxHolder);
    encoder.encodeStructPointer(time$.TimeDelta, val.timeWaited);
  };
  function VRPresentationProvider_SubmitFrameWithTextureHandle_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRPresentationProvider_SubmitFrameWithTextureHandle_Params.prototype.initDefaults_ = function() {
    this.frameId = 0;
    this.texture = null;
  };
  VRPresentationProvider_SubmitFrameWithTextureHandle_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRPresentationProvider_SubmitFrameWithTextureHandle_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VRPresentationProvider_SubmitFrameWithTextureHandle_Params.texture
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 4, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRPresentationProvider_SubmitFrameWithTextureHandle_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRPresentationProvider_SubmitFrameWithTextureHandle_Params.decode = function(decoder) {
    var packed;
    var val = new VRPresentationProvider_SubmitFrameWithTextureHandle_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameId = decoder.decodeStruct(codec.Int16);
    decoder.skip(1);
    decoder.skip(1);
    val.texture = decoder.decodeStruct(codec.Handle);
    return val;
  };

  VRPresentationProvider_SubmitFrameWithTextureHandle_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRPresentationProvider_SubmitFrameWithTextureHandle_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int16, val.frameId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Handle, val.texture);
  };
  function VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.prototype.initDefaults_ = function() {
    this.frameId = 0;
    this.syncToken = null;
    this.timeWaited = null;
  };
  VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.syncToken
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, sync_token$.SyncToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.timeWaited
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, time$.TimeDelta, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.encodedSize = codec.kStructHeaderSize + 24;

  VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.decode = function(decoder) {
    var packed;
    var val = new VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.frameId = decoder.decodeStruct(codec.Int16);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.syncToken = decoder.decodeStructPointer(sync_token$.SyncToken);
    val.timeWaited = decoder.decodeStructPointer(time$.TimeDelta);
    return val;
  };

  VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int16, val.frameId);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(sync_token$.SyncToken, val.syncToken);
    encoder.encodeStructPointer(time$.TimeDelta, val.timeWaited);
  };
  function VRDisplayClient_OnChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayClient_OnChanged_Params.prototype.initDefaults_ = function() {
    this.display = null;
  };
  VRDisplayClient_OnChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayClient_OnChanged_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayClient_OnChanged_Params.display
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, VRDisplayInfo, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRDisplayClient_OnChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRDisplayClient_OnChanged_Params.decode = function(decoder) {
    var packed;
    var val = new VRDisplayClient_OnChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.display = decoder.decodeStructPointer(VRDisplayInfo);
    return val;
  };

  VRDisplayClient_OnChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayClient_OnChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(VRDisplayInfo, val.display);
  };
  function VRDisplayClient_OnExitPresent_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayClient_OnExitPresent_Params.prototype.initDefaults_ = function() {
  };
  VRDisplayClient_OnExitPresent_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayClient_OnExitPresent_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRDisplayClient_OnExitPresent_Params.encodedSize = codec.kStructHeaderSize + 0;

  VRDisplayClient_OnExitPresent_Params.decode = function(decoder) {
    var packed;
    var val = new VRDisplayClient_OnExitPresent_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VRDisplayClient_OnExitPresent_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayClient_OnExitPresent_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VRDisplayClient_OnBlur_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayClient_OnBlur_Params.prototype.initDefaults_ = function() {
  };
  VRDisplayClient_OnBlur_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayClient_OnBlur_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRDisplayClient_OnBlur_Params.encodedSize = codec.kStructHeaderSize + 0;

  VRDisplayClient_OnBlur_Params.decode = function(decoder) {
    var packed;
    var val = new VRDisplayClient_OnBlur_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VRDisplayClient_OnBlur_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayClient_OnBlur_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VRDisplayClient_OnFocus_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayClient_OnFocus_Params.prototype.initDefaults_ = function() {
  };
  VRDisplayClient_OnFocus_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayClient_OnFocus_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRDisplayClient_OnFocus_Params.encodedSize = codec.kStructHeaderSize + 0;

  VRDisplayClient_OnFocus_Params.decode = function(decoder) {
    var packed;
    var val = new VRDisplayClient_OnFocus_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  VRDisplayClient_OnFocus_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayClient_OnFocus_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function VRDisplayClient_OnActivate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayClient_OnActivate_Params.prototype.initDefaults_ = function() {
    this.reason = 0;
  };
  VRDisplayClient_OnActivate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayClient_OnActivate_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayClient_OnActivate_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VRDisplayEventReason);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRDisplayClient_OnActivate_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRDisplayClient_OnActivate_Params.decode = function(decoder) {
    var packed;
    var val = new VRDisplayClient_OnActivate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reason = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRDisplayClient_OnActivate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayClient_OnActivate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VRDisplayClient_OnActivate_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayClient_OnActivate_ResponseParams.prototype.initDefaults_ = function() {
    this.willNotPresent = false;
  };
  VRDisplayClient_OnActivate_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayClient_OnActivate_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  VRDisplayClient_OnActivate_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  VRDisplayClient_OnActivate_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new VRDisplayClient_OnActivate_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    packed = decoder.readUint8();
    val.willNotPresent = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRDisplayClient_OnActivate_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayClient_OnActivate_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    packed = 0;
    packed |= (val.willNotPresent & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function VRDisplayClient_OnDeactivate_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  VRDisplayClient_OnDeactivate_Params.prototype.initDefaults_ = function() {
    this.reason = 0;
  };
  VRDisplayClient_OnDeactivate_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  VRDisplayClient_OnDeactivate_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate VRDisplayClient_OnDeactivate_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, VRDisplayEventReason);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  VRDisplayClient_OnDeactivate_Params.encodedSize = codec.kStructHeaderSize + 8;

  VRDisplayClient_OnDeactivate_Params.decode = function(decoder) {
    var packed;
    var val = new VRDisplayClient_OnDeactivate_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reason = decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  VRDisplayClient_OnDeactivate_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(VRDisplayClient_OnDeactivate_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kVRService_SetClient_Name = 0;
  var kVRService_SetListeningForActivate_Name = 1;

  function VRServicePtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VRService,
                                                   handleOrPtrInfo);
  }

  function VRServiceAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VRService, associatedInterfacePtrInfo);
  }

  VRServiceAssociatedPtr.prototype =
      Object.create(VRServicePtr.prototype);
  VRServiceAssociatedPtr.prototype.constructor =
      VRServiceAssociatedPtr;

  function VRServiceProxy(receiver) {
    this.receiver_ = receiver;
  }
  VRServicePtr.prototype.setClient = function() {
    return VRServiceProxy.prototype.setClient
        .apply(this.ptr.getProxy(), arguments);
  };

  VRServiceProxy.prototype.setClient = function(client) {
    var params_ = new VRService_SetClient_Params();
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVRService_SetClient_Name,
          codec.align(VRService_SetClient_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VRService_SetClient_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VRService_SetClient_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VRServicePtr.prototype.setListeningForActivate = function() {
    return VRServiceProxy.prototype.setListeningForActivate
        .apply(this.ptr.getProxy(), arguments);
  };

  VRServiceProxy.prototype.setListeningForActivate = function(listening) {
    var params_ = new VRService_SetListeningForActivate_Params();
    params_.listening = listening;
    var builder = new codec.MessageV0Builder(
        kVRService_SetListeningForActivate_Name,
        codec.align(VRService_SetListeningForActivate_Params.encodedSize));
    builder.encodeStruct(VRService_SetListeningForActivate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VRServiceStub(delegate) {
    this.delegate_ = delegate;
  }
  VRServiceStub.prototype.setClient = function(client) {
    return this.delegate_ && this.delegate_.setClient && this.delegate_.setClient(client);
  }
  VRServiceStub.prototype.setListeningForActivate = function(listening) {
    return this.delegate_ && this.delegate_.setListeningForActivate && this.delegate_.setListeningForActivate(listening);
  }

  VRServiceStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRService_SetListeningForActivate_Name:
      var params = reader.decodeStruct(VRService_SetListeningForActivate_Params);
      this.setListeningForActivate(params.listening);
      return true;
    default:
      return false;
    }
  };

  VRServiceStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRService_SetClient_Name:
      var params = reader.decodeStruct(VRService_SetClient_Params);
      this.setClient(params.client).then(function(response) {
        var responseParams =
            new VRService_SetClient_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kVRService_SetClient_Name,
            codec.align(VRService_SetClient_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VRService_SetClient_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVRServiceRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVRService_SetClient_Name:
        if (message.expectsResponse())
          paramsClass = VRService_SetClient_Params;
      break;
      case kVRService_SetListeningForActivate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRService_SetListeningForActivate_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVRServiceResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVRService_SetClient_Name:
        if (message.isResponse())
          paramsClass = VRService_SetClient_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VRService = {
    name: 'device.mojom.VRService',
    kVersion: 0,
    ptrClass: VRServicePtr,
    proxyClass: VRServiceProxy,
    stubClass: VRServiceStub,
    validateRequest: validateVRServiceRequest,
    validateResponse: validateVRServiceResponse,
  };
  VRServiceStub.prototype.validator = validateVRServiceRequest;
  VRServiceProxy.prototype.validator = validateVRServiceResponse;
  var kVRServiceClient_OnDisplayConnected_Name = 0;

  function VRServiceClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VRServiceClient,
                                                   handleOrPtrInfo);
  }

  function VRServiceClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VRServiceClient, associatedInterfacePtrInfo);
  }

  VRServiceClientAssociatedPtr.prototype =
      Object.create(VRServiceClientPtr.prototype);
  VRServiceClientAssociatedPtr.prototype.constructor =
      VRServiceClientAssociatedPtr;

  function VRServiceClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  VRServiceClientPtr.prototype.onDisplayConnected = function() {
    return VRServiceClientProxy.prototype.onDisplayConnected
        .apply(this.ptr.getProxy(), arguments);
  };

  VRServiceClientProxy.prototype.onDisplayConnected = function(display, request, displayInfo) {
    var params_ = new VRServiceClient_OnDisplayConnected_Params();
    params_.display = display;
    params_.request = request;
    params_.displayInfo = displayInfo;
    var builder = new codec.MessageV0Builder(
        kVRServiceClient_OnDisplayConnected_Name,
        codec.align(VRServiceClient_OnDisplayConnected_Params.encodedSize));
    builder.encodeStruct(VRServiceClient_OnDisplayConnected_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VRServiceClientStub(delegate) {
    this.delegate_ = delegate;
  }
  VRServiceClientStub.prototype.onDisplayConnected = function(display, request, displayInfo) {
    return this.delegate_ && this.delegate_.onDisplayConnected && this.delegate_.onDisplayConnected(display, request, displayInfo);
  }

  VRServiceClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRServiceClient_OnDisplayConnected_Name:
      var params = reader.decodeStruct(VRServiceClient_OnDisplayConnected_Params);
      this.onDisplayConnected(params.display, params.request, params.displayInfo);
      return true;
    default:
      return false;
    }
  };

  VRServiceClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateVRServiceClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVRServiceClient_OnDisplayConnected_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRServiceClient_OnDisplayConnected_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVRServiceClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var VRServiceClient = {
    name: 'device.mojom.VRServiceClient',
    kVersion: 0,
    ptrClass: VRServiceClientPtr,
    proxyClass: VRServiceClientProxy,
    stubClass: VRServiceClientStub,
    validateRequest: validateVRServiceClientRequest,
    validateResponse: null,
  };
  VRServiceClientStub.prototype.validator = validateVRServiceClientRequest;
  VRServiceClientProxy.prototype.validator = null;
  var kVRSubmitFrameClient_OnSubmitFrameTransferred_Name = 0;
  var kVRSubmitFrameClient_OnSubmitFrameRendered_Name = 1;
  var kVRSubmitFrameClient_OnSubmitFrameGpuFence_Name = 2;

  function VRSubmitFrameClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VRSubmitFrameClient,
                                                   handleOrPtrInfo);
  }

  function VRSubmitFrameClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VRSubmitFrameClient, associatedInterfacePtrInfo);
  }

  VRSubmitFrameClientAssociatedPtr.prototype =
      Object.create(VRSubmitFrameClientPtr.prototype);
  VRSubmitFrameClientAssociatedPtr.prototype.constructor =
      VRSubmitFrameClientAssociatedPtr;

  function VRSubmitFrameClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  VRSubmitFrameClientPtr.prototype.onSubmitFrameTransferred = function() {
    return VRSubmitFrameClientProxy.prototype.onSubmitFrameTransferred
        .apply(this.ptr.getProxy(), arguments);
  };

  VRSubmitFrameClientProxy.prototype.onSubmitFrameTransferred = function(success) {
    var params_ = new VRSubmitFrameClient_OnSubmitFrameTransferred_Params();
    params_.success = success;
    var builder = new codec.MessageV0Builder(
        kVRSubmitFrameClient_OnSubmitFrameTransferred_Name,
        codec.align(VRSubmitFrameClient_OnSubmitFrameTransferred_Params.encodedSize));
    builder.encodeStruct(VRSubmitFrameClient_OnSubmitFrameTransferred_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRSubmitFrameClientPtr.prototype.onSubmitFrameRendered = function() {
    return VRSubmitFrameClientProxy.prototype.onSubmitFrameRendered
        .apply(this.ptr.getProxy(), arguments);
  };

  VRSubmitFrameClientProxy.prototype.onSubmitFrameRendered = function() {
    var params_ = new VRSubmitFrameClient_OnSubmitFrameRendered_Params();
    var builder = new codec.MessageV0Builder(
        kVRSubmitFrameClient_OnSubmitFrameRendered_Name,
        codec.align(VRSubmitFrameClient_OnSubmitFrameRendered_Params.encodedSize));
    builder.encodeStruct(VRSubmitFrameClient_OnSubmitFrameRendered_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRSubmitFrameClientPtr.prototype.onSubmitFrameGpuFence = function() {
    return VRSubmitFrameClientProxy.prototype.onSubmitFrameGpuFence
        .apply(this.ptr.getProxy(), arguments);
  };

  VRSubmitFrameClientProxy.prototype.onSubmitFrameGpuFence = function(gpuFenceHandle) {
    var params_ = new VRSubmitFrameClient_OnSubmitFrameGpuFence_Params();
    params_.gpuFenceHandle = gpuFenceHandle;
    var builder = new codec.MessageV0Builder(
        kVRSubmitFrameClient_OnSubmitFrameGpuFence_Name,
        codec.align(VRSubmitFrameClient_OnSubmitFrameGpuFence_Params.encodedSize));
    builder.encodeStruct(VRSubmitFrameClient_OnSubmitFrameGpuFence_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VRSubmitFrameClientStub(delegate) {
    this.delegate_ = delegate;
  }
  VRSubmitFrameClientStub.prototype.onSubmitFrameTransferred = function(success) {
    return this.delegate_ && this.delegate_.onSubmitFrameTransferred && this.delegate_.onSubmitFrameTransferred(success);
  }
  VRSubmitFrameClientStub.prototype.onSubmitFrameRendered = function() {
    return this.delegate_ && this.delegate_.onSubmitFrameRendered && this.delegate_.onSubmitFrameRendered();
  }
  VRSubmitFrameClientStub.prototype.onSubmitFrameGpuFence = function(gpuFenceHandle) {
    return this.delegate_ && this.delegate_.onSubmitFrameGpuFence && this.delegate_.onSubmitFrameGpuFence(gpuFenceHandle);
  }

  VRSubmitFrameClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRSubmitFrameClient_OnSubmitFrameTransferred_Name:
      var params = reader.decodeStruct(VRSubmitFrameClient_OnSubmitFrameTransferred_Params);
      this.onSubmitFrameTransferred(params.success);
      return true;
    case kVRSubmitFrameClient_OnSubmitFrameRendered_Name:
      var params = reader.decodeStruct(VRSubmitFrameClient_OnSubmitFrameRendered_Params);
      this.onSubmitFrameRendered();
      return true;
    case kVRSubmitFrameClient_OnSubmitFrameGpuFence_Name:
      var params = reader.decodeStruct(VRSubmitFrameClient_OnSubmitFrameGpuFence_Params);
      this.onSubmitFrameGpuFence(params.gpuFenceHandle);
      return true;
    default:
      return false;
    }
  };

  VRSubmitFrameClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateVRSubmitFrameClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVRSubmitFrameClient_OnSubmitFrameTransferred_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRSubmitFrameClient_OnSubmitFrameTransferred_Params;
      break;
      case kVRSubmitFrameClient_OnSubmitFrameRendered_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRSubmitFrameClient_OnSubmitFrameRendered_Params;
      break;
      case kVRSubmitFrameClient_OnSubmitFrameGpuFence_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRSubmitFrameClient_OnSubmitFrameGpuFence_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVRSubmitFrameClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var VRSubmitFrameClient = {
    name: 'device.mojom.VRSubmitFrameClient',
    kVersion: 0,
    ptrClass: VRSubmitFrameClientPtr,
    proxyClass: VRSubmitFrameClientProxy,
    stubClass: VRSubmitFrameClientStub,
    validateRequest: validateVRSubmitFrameClientRequest,
    validateResponse: null,
  };
  VRSubmitFrameClientStub.prototype.validator = validateVRSubmitFrameClientRequest;
  VRSubmitFrameClientProxy.prototype.validator = null;
  var kVRDisplayHost_RequestSession_Name = 0;
  var kVRDisplayHost_SupportsSession_Name = 1;
  var kVRDisplayHost_ExitPresent_Name = 2;

  function VRDisplayHostPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VRDisplayHost,
                                                   handleOrPtrInfo);
  }

  function VRDisplayHostAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VRDisplayHost, associatedInterfacePtrInfo);
  }

  VRDisplayHostAssociatedPtr.prototype =
      Object.create(VRDisplayHostPtr.prototype);
  VRDisplayHostAssociatedPtr.prototype.constructor =
      VRDisplayHostAssociatedPtr;

  function VRDisplayHostProxy(receiver) {
    this.receiver_ = receiver;
  }
  VRDisplayHostPtr.prototype.requestSession = function() {
    return VRDisplayHostProxy.prototype.requestSession
        .apply(this.ptr.getProxy(), arguments);
  };

  VRDisplayHostProxy.prototype.requestSession = function(options, triggeredByDisplayactive) {
    var params_ = new VRDisplayHost_RequestSession_Params();
    params_.options = options;
    params_.triggeredByDisplayactive = triggeredByDisplayactive;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVRDisplayHost_RequestSession_Name,
          codec.align(VRDisplayHost_RequestSession_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VRDisplayHost_RequestSession_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VRDisplayHost_RequestSession_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VRDisplayHostPtr.prototype.supportsSession = function() {
    return VRDisplayHostProxy.prototype.supportsSession
        .apply(this.ptr.getProxy(), arguments);
  };

  VRDisplayHostProxy.prototype.supportsSession = function(options) {
    var params_ = new VRDisplayHost_SupportsSession_Params();
    params_.options = options;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVRDisplayHost_SupportsSession_Name,
          codec.align(VRDisplayHost_SupportsSession_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VRDisplayHost_SupportsSession_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VRDisplayHost_SupportsSession_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VRDisplayHostPtr.prototype.exitPresent = function() {
    return VRDisplayHostProxy.prototype.exitPresent
        .apply(this.ptr.getProxy(), arguments);
  };

  VRDisplayHostProxy.prototype.exitPresent = function() {
    var params_ = new VRDisplayHost_ExitPresent_Params();
    var builder = new codec.MessageV0Builder(
        kVRDisplayHost_ExitPresent_Name,
        codec.align(VRDisplayHost_ExitPresent_Params.encodedSize));
    builder.encodeStruct(VRDisplayHost_ExitPresent_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VRDisplayHostStub(delegate) {
    this.delegate_ = delegate;
  }
  VRDisplayHostStub.prototype.requestSession = function(options, triggeredByDisplayactive) {
    return this.delegate_ && this.delegate_.requestSession && this.delegate_.requestSession(options, triggeredByDisplayactive);
  }
  VRDisplayHostStub.prototype.supportsSession = function(options) {
    return this.delegate_ && this.delegate_.supportsSession && this.delegate_.supportsSession(options);
  }
  VRDisplayHostStub.prototype.exitPresent = function() {
    return this.delegate_ && this.delegate_.exitPresent && this.delegate_.exitPresent();
  }

  VRDisplayHostStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRDisplayHost_ExitPresent_Name:
      var params = reader.decodeStruct(VRDisplayHost_ExitPresent_Params);
      this.exitPresent();
      return true;
    default:
      return false;
    }
  };

  VRDisplayHostStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRDisplayHost_RequestSession_Name:
      var params = reader.decodeStruct(VRDisplayHost_RequestSession_Params);
      this.requestSession(params.options, params.triggeredByDisplayactive).then(function(response) {
        var responseParams =
            new VRDisplayHost_RequestSession_ResponseParams();
        responseParams.session = response.session;
        var builder = new codec.MessageV1Builder(
            kVRDisplayHost_RequestSession_Name,
            codec.align(VRDisplayHost_RequestSession_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VRDisplayHost_RequestSession_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVRDisplayHost_SupportsSession_Name:
      var params = reader.decodeStruct(VRDisplayHost_SupportsSession_Params);
      this.supportsSession(params.options).then(function(response) {
        var responseParams =
            new VRDisplayHost_SupportsSession_ResponseParams();
        responseParams.supportsSession = response.supportsSession;
        var builder = new codec.MessageV1Builder(
            kVRDisplayHost_SupportsSession_Name,
            codec.align(VRDisplayHost_SupportsSession_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VRDisplayHost_SupportsSession_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVRDisplayHostRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVRDisplayHost_RequestSession_Name:
        if (message.expectsResponse())
          paramsClass = VRDisplayHost_RequestSession_Params;
      break;
      case kVRDisplayHost_SupportsSession_Name:
        if (message.expectsResponse())
          paramsClass = VRDisplayHost_SupportsSession_Params;
      break;
      case kVRDisplayHost_ExitPresent_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRDisplayHost_ExitPresent_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVRDisplayHostResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVRDisplayHost_RequestSession_Name:
        if (message.isResponse())
          paramsClass = VRDisplayHost_RequestSession_ResponseParams;
        break;
      case kVRDisplayHost_SupportsSession_Name:
        if (message.isResponse())
          paramsClass = VRDisplayHost_SupportsSession_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VRDisplayHost = {
    name: 'device.mojom.VRDisplayHost',
    kVersion: 0,
    ptrClass: VRDisplayHostPtr,
    proxyClass: VRDisplayHostProxy,
    stubClass: VRDisplayHostStub,
    validateRequest: validateVRDisplayHostRequest,
    validateResponse: validateVRDisplayHostResponse,
  };
  VRDisplayHostStub.prototype.validator = validateVRDisplayHostRequest;
  VRDisplayHostProxy.prototype.validator = validateVRDisplayHostResponse;
  var kVRMagicWindowProvider_GetFrameData_Name = 0;
  var kVRMagicWindowProvider_UpdateSessionGeometry_Name = 1;
  var kVRMagicWindowProvider_RequestHitTest_Name = 2;

  function VRMagicWindowProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VRMagicWindowProvider,
                                                   handleOrPtrInfo);
  }

  function VRMagicWindowProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VRMagicWindowProvider, associatedInterfacePtrInfo);
  }

  VRMagicWindowProviderAssociatedPtr.prototype =
      Object.create(VRMagicWindowProviderPtr.prototype);
  VRMagicWindowProviderAssociatedPtr.prototype.constructor =
      VRMagicWindowProviderAssociatedPtr;

  function VRMagicWindowProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  VRMagicWindowProviderPtr.prototype.getFrameData = function() {
    return VRMagicWindowProviderProxy.prototype.getFrameData
        .apply(this.ptr.getProxy(), arguments);
  };

  VRMagicWindowProviderProxy.prototype.getFrameData = function() {
    var params_ = new VRMagicWindowProvider_GetFrameData_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVRMagicWindowProvider_GetFrameData_Name,
          codec.align(VRMagicWindowProvider_GetFrameData_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VRMagicWindowProvider_GetFrameData_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VRMagicWindowProvider_GetFrameData_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VRMagicWindowProviderPtr.prototype.updateSessionGeometry = function() {
    return VRMagicWindowProviderProxy.prototype.updateSessionGeometry
        .apply(this.ptr.getProxy(), arguments);
  };

  VRMagicWindowProviderProxy.prototype.updateSessionGeometry = function(frameSize, displayRotation) {
    var params_ = new VRMagicWindowProvider_UpdateSessionGeometry_Params();
    params_.frameSize = frameSize;
    params_.displayRotation = displayRotation;
    var builder = new codec.MessageV0Builder(
        kVRMagicWindowProvider_UpdateSessionGeometry_Name,
        codec.align(VRMagicWindowProvider_UpdateSessionGeometry_Params.encodedSize));
    builder.encodeStruct(VRMagicWindowProvider_UpdateSessionGeometry_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRMagicWindowProviderPtr.prototype.requestHitTest = function() {
    return VRMagicWindowProviderProxy.prototype.requestHitTest
        .apply(this.ptr.getProxy(), arguments);
  };

  VRMagicWindowProviderProxy.prototype.requestHitTest = function(ray) {
    var params_ = new VRMagicWindowProvider_RequestHitTest_Params();
    params_.ray = ray;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVRMagicWindowProvider_RequestHitTest_Name,
          codec.align(VRMagicWindowProvider_RequestHitTest_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VRMagicWindowProvider_RequestHitTest_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VRMagicWindowProvider_RequestHitTest_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function VRMagicWindowProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  VRMagicWindowProviderStub.prototype.getFrameData = function() {
    return this.delegate_ && this.delegate_.getFrameData && this.delegate_.getFrameData();
  }
  VRMagicWindowProviderStub.prototype.updateSessionGeometry = function(frameSize, displayRotation) {
    return this.delegate_ && this.delegate_.updateSessionGeometry && this.delegate_.updateSessionGeometry(frameSize, displayRotation);
  }
  VRMagicWindowProviderStub.prototype.requestHitTest = function(ray) {
    return this.delegate_ && this.delegate_.requestHitTest && this.delegate_.requestHitTest(ray);
  }

  VRMagicWindowProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRMagicWindowProvider_UpdateSessionGeometry_Name:
      var params = reader.decodeStruct(VRMagicWindowProvider_UpdateSessionGeometry_Params);
      this.updateSessionGeometry(params.frameSize, params.displayRotation);
      return true;
    default:
      return false;
    }
  };

  VRMagicWindowProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRMagicWindowProvider_GetFrameData_Name:
      var params = reader.decodeStruct(VRMagicWindowProvider_GetFrameData_Params);
      this.getFrameData().then(function(response) {
        var responseParams =
            new VRMagicWindowProvider_GetFrameData_ResponseParams();
        responseParams.frameData = response.frameData;
        var builder = new codec.MessageV1Builder(
            kVRMagicWindowProvider_GetFrameData_Name,
            codec.align(VRMagicWindowProvider_GetFrameData_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VRMagicWindowProvider_GetFrameData_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kVRMagicWindowProvider_RequestHitTest_Name:
      var params = reader.decodeStruct(VRMagicWindowProvider_RequestHitTest_Params);
      this.requestHitTest(params.ray).then(function(response) {
        var responseParams =
            new VRMagicWindowProvider_RequestHitTest_ResponseParams();
        responseParams.results = response.results;
        var builder = new codec.MessageV1Builder(
            kVRMagicWindowProvider_RequestHitTest_Name,
            codec.align(VRMagicWindowProvider_RequestHitTest_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VRMagicWindowProvider_RequestHitTest_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVRMagicWindowProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVRMagicWindowProvider_GetFrameData_Name:
        if (message.expectsResponse())
          paramsClass = VRMagicWindowProvider_GetFrameData_Params;
      break;
      case kVRMagicWindowProvider_UpdateSessionGeometry_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRMagicWindowProvider_UpdateSessionGeometry_Params;
      break;
      case kVRMagicWindowProvider_RequestHitTest_Name:
        if (message.expectsResponse())
          paramsClass = VRMagicWindowProvider_RequestHitTest_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVRMagicWindowProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVRMagicWindowProvider_GetFrameData_Name:
        if (message.isResponse())
          paramsClass = VRMagicWindowProvider_GetFrameData_ResponseParams;
        break;
      case kVRMagicWindowProvider_RequestHitTest_Name:
        if (message.isResponse())
          paramsClass = VRMagicWindowProvider_RequestHitTest_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VRMagicWindowProvider = {
    name: 'device.mojom.VRMagicWindowProvider',
    kVersion: 0,
    ptrClass: VRMagicWindowProviderPtr,
    proxyClass: VRMagicWindowProviderProxy,
    stubClass: VRMagicWindowProviderStub,
    validateRequest: validateVRMagicWindowProviderRequest,
    validateResponse: validateVRMagicWindowProviderResponse,
  };
  VRMagicWindowProviderStub.prototype.validator = validateVRMagicWindowProviderRequest;
  VRMagicWindowProviderProxy.prototype.validator = validateVRMagicWindowProviderResponse;
  var kVRPresentationProvider_GetFrameData_Name = 0;
  var kVRPresentationProvider_UpdateLayerBounds_Name = 1;
  var kVRPresentationProvider_SubmitFrameMissing_Name = 2;
  var kVRPresentationProvider_SubmitFrame_Name = 3;
  var kVRPresentationProvider_SubmitFrameWithTextureHandle_Name = 4;
  var kVRPresentationProvider_SubmitFrameDrawnIntoTexture_Name = 5;

  function VRPresentationProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VRPresentationProvider,
                                                   handleOrPtrInfo);
  }

  function VRPresentationProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VRPresentationProvider, associatedInterfacePtrInfo);
  }

  VRPresentationProviderAssociatedPtr.prototype =
      Object.create(VRPresentationProviderPtr.prototype);
  VRPresentationProviderAssociatedPtr.prototype.constructor =
      VRPresentationProviderAssociatedPtr;

  function VRPresentationProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  VRPresentationProviderPtr.prototype.getFrameData = function() {
    return VRPresentationProviderProxy.prototype.getFrameData
        .apply(this.ptr.getProxy(), arguments);
  };

  VRPresentationProviderProxy.prototype.getFrameData = function() {
    var params_ = new VRPresentationProvider_GetFrameData_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVRPresentationProvider_GetFrameData_Name,
          codec.align(VRPresentationProvider_GetFrameData_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VRPresentationProvider_GetFrameData_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VRPresentationProvider_GetFrameData_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VRPresentationProviderPtr.prototype.updateLayerBounds = function() {
    return VRPresentationProviderProxy.prototype.updateLayerBounds
        .apply(this.ptr.getProxy(), arguments);
  };

  VRPresentationProviderProxy.prototype.updateLayerBounds = function(frameId, leftBounds, rightBounds, sourceSize) {
    var params_ = new VRPresentationProvider_UpdateLayerBounds_Params();
    params_.frameId = frameId;
    params_.leftBounds = leftBounds;
    params_.rightBounds = rightBounds;
    params_.sourceSize = sourceSize;
    var builder = new codec.MessageV0Builder(
        kVRPresentationProvider_UpdateLayerBounds_Name,
        codec.align(VRPresentationProvider_UpdateLayerBounds_Params.encodedSize));
    builder.encodeStruct(VRPresentationProvider_UpdateLayerBounds_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRPresentationProviderPtr.prototype.submitFrameMissing = function() {
    return VRPresentationProviderProxy.prototype.submitFrameMissing
        .apply(this.ptr.getProxy(), arguments);
  };

  VRPresentationProviderProxy.prototype.submitFrameMissing = function(frameId, syncToken) {
    var params_ = new VRPresentationProvider_SubmitFrameMissing_Params();
    params_.frameId = frameId;
    params_.syncToken = syncToken;
    var builder = new codec.MessageV0Builder(
        kVRPresentationProvider_SubmitFrameMissing_Name,
        codec.align(VRPresentationProvider_SubmitFrameMissing_Params.encodedSize));
    builder.encodeStruct(VRPresentationProvider_SubmitFrameMissing_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRPresentationProviderPtr.prototype.submitFrame = function() {
    return VRPresentationProviderProxy.prototype.submitFrame
        .apply(this.ptr.getProxy(), arguments);
  };

  VRPresentationProviderProxy.prototype.submitFrame = function(frameId, mailboxHolder, timeWaited) {
    var params_ = new VRPresentationProvider_SubmitFrame_Params();
    params_.frameId = frameId;
    params_.mailboxHolder = mailboxHolder;
    params_.timeWaited = timeWaited;
    var builder = new codec.MessageV0Builder(
        kVRPresentationProvider_SubmitFrame_Name,
        codec.align(VRPresentationProvider_SubmitFrame_Params.encodedSize));
    builder.encodeStruct(VRPresentationProvider_SubmitFrame_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRPresentationProviderPtr.prototype.submitFrameWithTextureHandle = function() {
    return VRPresentationProviderProxy.prototype.submitFrameWithTextureHandle
        .apply(this.ptr.getProxy(), arguments);
  };

  VRPresentationProviderProxy.prototype.submitFrameWithTextureHandle = function(frameId, texture) {
    var params_ = new VRPresentationProvider_SubmitFrameWithTextureHandle_Params();
    params_.frameId = frameId;
    params_.texture = texture;
    var builder = new codec.MessageV0Builder(
        kVRPresentationProvider_SubmitFrameWithTextureHandle_Name,
        codec.align(VRPresentationProvider_SubmitFrameWithTextureHandle_Params.encodedSize));
    builder.encodeStruct(VRPresentationProvider_SubmitFrameWithTextureHandle_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRPresentationProviderPtr.prototype.submitFrameDrawnIntoTexture = function() {
    return VRPresentationProviderProxy.prototype.submitFrameDrawnIntoTexture
        .apply(this.ptr.getProxy(), arguments);
  };

  VRPresentationProviderProxy.prototype.submitFrameDrawnIntoTexture = function(frameId, syncToken, timeWaited) {
    var params_ = new VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params();
    params_.frameId = frameId;
    params_.syncToken = syncToken;
    params_.timeWaited = timeWaited;
    var builder = new codec.MessageV0Builder(
        kVRPresentationProvider_SubmitFrameDrawnIntoTexture_Name,
        codec.align(VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params.encodedSize));
    builder.encodeStruct(VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VRPresentationProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  VRPresentationProviderStub.prototype.getFrameData = function() {
    return this.delegate_ && this.delegate_.getFrameData && this.delegate_.getFrameData();
  }
  VRPresentationProviderStub.prototype.updateLayerBounds = function(frameId, leftBounds, rightBounds, sourceSize) {
    return this.delegate_ && this.delegate_.updateLayerBounds && this.delegate_.updateLayerBounds(frameId, leftBounds, rightBounds, sourceSize);
  }
  VRPresentationProviderStub.prototype.submitFrameMissing = function(frameId, syncToken) {
    return this.delegate_ && this.delegate_.submitFrameMissing && this.delegate_.submitFrameMissing(frameId, syncToken);
  }
  VRPresentationProviderStub.prototype.submitFrame = function(frameId, mailboxHolder, timeWaited) {
    return this.delegate_ && this.delegate_.submitFrame && this.delegate_.submitFrame(frameId, mailboxHolder, timeWaited);
  }
  VRPresentationProviderStub.prototype.submitFrameWithTextureHandle = function(frameId, texture) {
    return this.delegate_ && this.delegate_.submitFrameWithTextureHandle && this.delegate_.submitFrameWithTextureHandle(frameId, texture);
  }
  VRPresentationProviderStub.prototype.submitFrameDrawnIntoTexture = function(frameId, syncToken, timeWaited) {
    return this.delegate_ && this.delegate_.submitFrameDrawnIntoTexture && this.delegate_.submitFrameDrawnIntoTexture(frameId, syncToken, timeWaited);
  }

  VRPresentationProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRPresentationProvider_UpdateLayerBounds_Name:
      var params = reader.decodeStruct(VRPresentationProvider_UpdateLayerBounds_Params);
      this.updateLayerBounds(params.frameId, params.leftBounds, params.rightBounds, params.sourceSize);
      return true;
    case kVRPresentationProvider_SubmitFrameMissing_Name:
      var params = reader.decodeStruct(VRPresentationProvider_SubmitFrameMissing_Params);
      this.submitFrameMissing(params.frameId, params.syncToken);
      return true;
    case kVRPresentationProvider_SubmitFrame_Name:
      var params = reader.decodeStruct(VRPresentationProvider_SubmitFrame_Params);
      this.submitFrame(params.frameId, params.mailboxHolder, params.timeWaited);
      return true;
    case kVRPresentationProvider_SubmitFrameWithTextureHandle_Name:
      var params = reader.decodeStruct(VRPresentationProvider_SubmitFrameWithTextureHandle_Params);
      this.submitFrameWithTextureHandle(params.frameId, params.texture);
      return true;
    case kVRPresentationProvider_SubmitFrameDrawnIntoTexture_Name:
      var params = reader.decodeStruct(VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params);
      this.submitFrameDrawnIntoTexture(params.frameId, params.syncToken, params.timeWaited);
      return true;
    default:
      return false;
    }
  };

  VRPresentationProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRPresentationProvider_GetFrameData_Name:
      var params = reader.decodeStruct(VRPresentationProvider_GetFrameData_Params);
      this.getFrameData().then(function(response) {
        var responseParams =
            new VRPresentationProvider_GetFrameData_ResponseParams();
        responseParams.frameData = response.frameData;
        var builder = new codec.MessageV1Builder(
            kVRPresentationProvider_GetFrameData_Name,
            codec.align(VRPresentationProvider_GetFrameData_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VRPresentationProvider_GetFrameData_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVRPresentationProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVRPresentationProvider_GetFrameData_Name:
        if (message.expectsResponse())
          paramsClass = VRPresentationProvider_GetFrameData_Params;
      break;
      case kVRPresentationProvider_UpdateLayerBounds_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRPresentationProvider_UpdateLayerBounds_Params;
      break;
      case kVRPresentationProvider_SubmitFrameMissing_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRPresentationProvider_SubmitFrameMissing_Params;
      break;
      case kVRPresentationProvider_SubmitFrame_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRPresentationProvider_SubmitFrame_Params;
      break;
      case kVRPresentationProvider_SubmitFrameWithTextureHandle_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRPresentationProvider_SubmitFrameWithTextureHandle_Params;
      break;
      case kVRPresentationProvider_SubmitFrameDrawnIntoTexture_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRPresentationProvider_SubmitFrameDrawnIntoTexture_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVRPresentationProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVRPresentationProvider_GetFrameData_Name:
        if (message.isResponse())
          paramsClass = VRPresentationProvider_GetFrameData_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VRPresentationProvider = {
    name: 'device.mojom.VRPresentationProvider',
    kVersion: 0,
    ptrClass: VRPresentationProviderPtr,
    proxyClass: VRPresentationProviderProxy,
    stubClass: VRPresentationProviderStub,
    validateRequest: validateVRPresentationProviderRequest,
    validateResponse: validateVRPresentationProviderResponse,
  };
  VRPresentationProviderStub.prototype.validator = validateVRPresentationProviderRequest;
  VRPresentationProviderProxy.prototype.validator = validateVRPresentationProviderResponse;
  var kVRDisplayClient_OnChanged_Name = 0;
  var kVRDisplayClient_OnExitPresent_Name = 1;
  var kVRDisplayClient_OnBlur_Name = 2;
  var kVRDisplayClient_OnFocus_Name = 3;
  var kVRDisplayClient_OnActivate_Name = 4;
  var kVRDisplayClient_OnDeactivate_Name = 5;

  function VRDisplayClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(VRDisplayClient,
                                                   handleOrPtrInfo);
  }

  function VRDisplayClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        VRDisplayClient, associatedInterfacePtrInfo);
  }

  VRDisplayClientAssociatedPtr.prototype =
      Object.create(VRDisplayClientPtr.prototype);
  VRDisplayClientAssociatedPtr.prototype.constructor =
      VRDisplayClientAssociatedPtr;

  function VRDisplayClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  VRDisplayClientPtr.prototype.onChanged = function() {
    return VRDisplayClientProxy.prototype.onChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  VRDisplayClientProxy.prototype.onChanged = function(display) {
    var params_ = new VRDisplayClient_OnChanged_Params();
    params_.display = display;
    var builder = new codec.MessageV0Builder(
        kVRDisplayClient_OnChanged_Name,
        codec.align(VRDisplayClient_OnChanged_Params.encodedSize));
    builder.encodeStruct(VRDisplayClient_OnChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRDisplayClientPtr.prototype.onExitPresent = function() {
    return VRDisplayClientProxy.prototype.onExitPresent
        .apply(this.ptr.getProxy(), arguments);
  };

  VRDisplayClientProxy.prototype.onExitPresent = function() {
    var params_ = new VRDisplayClient_OnExitPresent_Params();
    var builder = new codec.MessageV0Builder(
        kVRDisplayClient_OnExitPresent_Name,
        codec.align(VRDisplayClient_OnExitPresent_Params.encodedSize));
    builder.encodeStruct(VRDisplayClient_OnExitPresent_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRDisplayClientPtr.prototype.onBlur = function() {
    return VRDisplayClientProxy.prototype.onBlur
        .apply(this.ptr.getProxy(), arguments);
  };

  VRDisplayClientProxy.prototype.onBlur = function() {
    var params_ = new VRDisplayClient_OnBlur_Params();
    var builder = new codec.MessageV0Builder(
        kVRDisplayClient_OnBlur_Name,
        codec.align(VRDisplayClient_OnBlur_Params.encodedSize));
    builder.encodeStruct(VRDisplayClient_OnBlur_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRDisplayClientPtr.prototype.onFocus = function() {
    return VRDisplayClientProxy.prototype.onFocus
        .apply(this.ptr.getProxy(), arguments);
  };

  VRDisplayClientProxy.prototype.onFocus = function() {
    var params_ = new VRDisplayClient_OnFocus_Params();
    var builder = new codec.MessageV0Builder(
        kVRDisplayClient_OnFocus_Name,
        codec.align(VRDisplayClient_OnFocus_Params.encodedSize));
    builder.encodeStruct(VRDisplayClient_OnFocus_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  VRDisplayClientPtr.prototype.onActivate = function() {
    return VRDisplayClientProxy.prototype.onActivate
        .apply(this.ptr.getProxy(), arguments);
  };

  VRDisplayClientProxy.prototype.onActivate = function(reason) {
    var params_ = new VRDisplayClient_OnActivate_Params();
    params_.reason = reason;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kVRDisplayClient_OnActivate_Name,
          codec.align(VRDisplayClient_OnActivate_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(VRDisplayClient_OnActivate_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(VRDisplayClient_OnActivate_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  VRDisplayClientPtr.prototype.onDeactivate = function() {
    return VRDisplayClientProxy.prototype.onDeactivate
        .apply(this.ptr.getProxy(), arguments);
  };

  VRDisplayClientProxy.prototype.onDeactivate = function(reason) {
    var params_ = new VRDisplayClient_OnDeactivate_Params();
    params_.reason = reason;
    var builder = new codec.MessageV0Builder(
        kVRDisplayClient_OnDeactivate_Name,
        codec.align(VRDisplayClient_OnDeactivate_Params.encodedSize));
    builder.encodeStruct(VRDisplayClient_OnDeactivate_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function VRDisplayClientStub(delegate) {
    this.delegate_ = delegate;
  }
  VRDisplayClientStub.prototype.onChanged = function(display) {
    return this.delegate_ && this.delegate_.onChanged && this.delegate_.onChanged(display);
  }
  VRDisplayClientStub.prototype.onExitPresent = function() {
    return this.delegate_ && this.delegate_.onExitPresent && this.delegate_.onExitPresent();
  }
  VRDisplayClientStub.prototype.onBlur = function() {
    return this.delegate_ && this.delegate_.onBlur && this.delegate_.onBlur();
  }
  VRDisplayClientStub.prototype.onFocus = function() {
    return this.delegate_ && this.delegate_.onFocus && this.delegate_.onFocus();
  }
  VRDisplayClientStub.prototype.onActivate = function(reason) {
    return this.delegate_ && this.delegate_.onActivate && this.delegate_.onActivate(reason);
  }
  VRDisplayClientStub.prototype.onDeactivate = function(reason) {
    return this.delegate_ && this.delegate_.onDeactivate && this.delegate_.onDeactivate(reason);
  }

  VRDisplayClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRDisplayClient_OnChanged_Name:
      var params = reader.decodeStruct(VRDisplayClient_OnChanged_Params);
      this.onChanged(params.display);
      return true;
    case kVRDisplayClient_OnExitPresent_Name:
      var params = reader.decodeStruct(VRDisplayClient_OnExitPresent_Params);
      this.onExitPresent();
      return true;
    case kVRDisplayClient_OnBlur_Name:
      var params = reader.decodeStruct(VRDisplayClient_OnBlur_Params);
      this.onBlur();
      return true;
    case kVRDisplayClient_OnFocus_Name:
      var params = reader.decodeStruct(VRDisplayClient_OnFocus_Params);
      this.onFocus();
      return true;
    case kVRDisplayClient_OnDeactivate_Name:
      var params = reader.decodeStruct(VRDisplayClient_OnDeactivate_Params);
      this.onDeactivate(params.reason);
      return true;
    default:
      return false;
    }
  };

  VRDisplayClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kVRDisplayClient_OnActivate_Name:
      var params = reader.decodeStruct(VRDisplayClient_OnActivate_Params);
      this.onActivate(params.reason).then(function(response) {
        var responseParams =
            new VRDisplayClient_OnActivate_ResponseParams();
        responseParams.willNotPresent = response.willNotPresent;
        var builder = new codec.MessageV1Builder(
            kVRDisplayClient_OnActivate_Name,
            codec.align(VRDisplayClient_OnActivate_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(VRDisplayClient_OnActivate_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateVRDisplayClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kVRDisplayClient_OnChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRDisplayClient_OnChanged_Params;
      break;
      case kVRDisplayClient_OnExitPresent_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRDisplayClient_OnExitPresent_Params;
      break;
      case kVRDisplayClient_OnBlur_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRDisplayClient_OnBlur_Params;
      break;
      case kVRDisplayClient_OnFocus_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRDisplayClient_OnFocus_Params;
      break;
      case kVRDisplayClient_OnActivate_Name:
        if (message.expectsResponse())
          paramsClass = VRDisplayClient_OnActivate_Params;
      break;
      case kVRDisplayClient_OnDeactivate_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = VRDisplayClient_OnDeactivate_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateVRDisplayClientResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kVRDisplayClient_OnActivate_Name:
        if (message.isResponse())
          paramsClass = VRDisplayClient_OnActivate_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var VRDisplayClient = {
    name: 'device.mojom.VRDisplayClient',
    kVersion: 0,
    ptrClass: VRDisplayClientPtr,
    proxyClass: VRDisplayClientProxy,
    stubClass: VRDisplayClientStub,
    validateRequest: validateVRDisplayClientRequest,
    validateResponse: validateVRDisplayClientResponse,
  };
  VRDisplayClientStub.prototype.validator = validateVRDisplayClientRequest;
  VRDisplayClientProxy.prototype.validator = validateVRDisplayClientResponse;
  exports.XRHandedness = XRHandedness;
  exports.XRTargetRayMode = XRTargetRayMode;
  exports.VRDisplayFrameTransportMethod = VRDisplayFrameTransportMethod;
  exports.VRDisplayEventReason = VRDisplayEventReason;
  exports.XRSessionOptions = XRSessionOptions;
  exports.XRSession = XRSession;
  exports.XRPresentationConnection = XRPresentationConnection;
  exports.XRInputSourceDescription = XRInputSourceDescription;
  exports.XRInputSourceState = XRInputSourceState;
  exports.VRFieldOfView = VRFieldOfView;
  exports.VRPose = VRPose;
  exports.XRRay = XRRay;
  exports.XRHitResult = XRHitResult;
  exports.VRDisplayCapabilities = VRDisplayCapabilities;
  exports.VREyeParameters = VREyeParameters;
  exports.VRStageParameters = VRStageParameters;
  exports.VRDisplayInfo = VRDisplayInfo;
  exports.VRDisplayFrameTransportOptions = VRDisplayFrameTransportOptions;
  exports.XRFrameData = XRFrameData;
  exports.VRService = VRService;
  exports.VRServicePtr = VRServicePtr;
  exports.VRServiceAssociatedPtr = VRServiceAssociatedPtr;
  exports.VRServiceClient = VRServiceClient;
  exports.VRServiceClientPtr = VRServiceClientPtr;
  exports.VRServiceClientAssociatedPtr = VRServiceClientAssociatedPtr;
  exports.VRSubmitFrameClient = VRSubmitFrameClient;
  exports.VRSubmitFrameClientPtr = VRSubmitFrameClientPtr;
  exports.VRSubmitFrameClientAssociatedPtr = VRSubmitFrameClientAssociatedPtr;
  exports.VRDisplayHost = VRDisplayHost;
  exports.VRDisplayHostPtr = VRDisplayHostPtr;
  exports.VRDisplayHostAssociatedPtr = VRDisplayHostAssociatedPtr;
  exports.VRMagicWindowProvider = VRMagicWindowProvider;
  exports.VRMagicWindowProviderPtr = VRMagicWindowProviderPtr;
  exports.VRMagicWindowProviderAssociatedPtr = VRMagicWindowProviderAssociatedPtr;
  exports.VRPresentationProvider = VRPresentationProvider;
  exports.VRPresentationProviderPtr = VRPresentationProviderPtr;
  exports.VRPresentationProviderAssociatedPtr = VRPresentationProviderAssociatedPtr;
  exports.VRDisplayClient = VRDisplayClient;
  exports.VRDisplayClientPtr = VRDisplayClientPtr;
  exports.VRDisplayClientAssociatedPtr = VRDisplayClientAssociatedPtr;
})();