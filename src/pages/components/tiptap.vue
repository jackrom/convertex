<template>
  <EditorContent :editor="editor" />
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
// eslint-disable-next-line import/no-named-as-default
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: `<p>I’m running Tiptap with Vue.js. 🎉</p>`,
  extensions: [
    StarterKit,
  ],
})
</script>
