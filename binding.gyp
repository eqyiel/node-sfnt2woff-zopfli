{
  "targets": [{
    "target_name": "woff_encode",
    "sources": [
      "./src/woff_encode.cc",
      "./sfnt2woff-zopfli/blocksplitter.c",
      "./sfnt2woff-zopfli/cache.c",
      "./sfnt2woff-zopfli/deflate.c",
      "./sfnt2woff-zopfli/gzip_container.c",
      "./sfnt2woff-zopfli/hash.c",
      "./sfnt2woff-zopfli/katajainen.c",
      "./sfnt2woff-zopfli/lz77.c",
      "./sfnt2woff-zopfli/squeeze.c",
      "./sfnt2woff-zopfli/tree.c",
      "./sfnt2woff-zopfli/util.c",
      "./sfnt2woff-zopfli/zlib_container.c",
      "./sfnt2woff-zopfli/zopfli_lib.c",
      "./sfnt2woff-zopfli/woff.c"
    ],
    "include_dirs"  : [
      "<!(node -e \"require('nan')\")"
    ],
    "cflags": [
      "-Wall"
    ]
  }]
}
