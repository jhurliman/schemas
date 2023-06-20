// Generated by https://github.com/foxglove/schemas

import { KeyValuePair } from "./KeyValuePair";
import { Time } from "./Time";

/** A single frame of a compressed video bitstream */
export type CompressedVideo = {
  /** Timestamp of video frame */
  timestamp: Time;

  /** Frame of reference for the decoded image. The origin of the frame is the optical center of the camera. +x points to the right in the image, +y points down, and +z points into the plane of the image. */
  frame_id: string;

  /** Compressed video frame data. For packet-based video codecs this data must begin and end on packet boundaries (no partial packets), and must contain enough video packets to decode exactly one image (either a keyframe or delta frame). */
  data: Uint8Array;

  /** Indicates whether this video frame is a keyframe or delta frame. In H.26x terminology these are also known as I-frames (intra-coded picture) and P-frames (predicted picture). B-frames are not supported. When this field is set to true, the `metadata` array must be populated as well. */
  keyframe: boolean;

  /**
   * Video metadata used to initialize a video decoder, expressed as an array of key-value pairs. This metadata must be present for every keyframe (when `keyframe` is true), and should be left empty for delta frames. This metadata is modeled after [WebCodecs VideoDecoderConfig](https://www.w3.org/TR/webcodecs/#video-decoder-config), although it can be used to initialize any video decoder. See the See the [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-avc-codec-registration/) for more information on the interpretation of each field for a specific codec. The following keys are supported:
   * 
   *       * `codec` - A fully qualified codec string describing the video codec. The format for this string is specific to each codec, and is described in the WebCodecs Codec Registry.
   *       * `description` - Base64-encoded binary data that is specific to each codec. For H.264 this is an AVCDecoderConfigurationRecord (avcC data), and for H.265 this is a HEVCDecoderConfigurationRecord (hvcC data).
   *       * `codedWidth` - Width of video frames in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
   *       * `codedHeight` - Height of video frames in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
   *       * `displayAspectWidth` - (Optional) Horizontal dimension of the VideoFrame's aspect ratio when displayed.
   *       * `displayAspectHeight` - (Optional) Vertical dimension of the VideoFrame's aspect ratio when displayed.
   */
  metadata: KeyValuePair[];
};
