{
  "targets": [
    {
      "target_name": "mouse",
      "sources": [
        "src/mouse_position.cc",
        "src/mouse.cc"
      ],
      "conditions": [
        ['OS == "linux"', {
          'link_settings': {
            'libraries': [
              '-lX11',
            ]
          },
        }]
      ]
    }
  ]
}
