const image =
  'data:image/webp;base64,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'

export default image
