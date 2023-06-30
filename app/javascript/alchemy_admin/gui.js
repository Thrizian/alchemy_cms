import TagsAutocomplete from "alchemy_admin/tags_autocomplete"
import Tooltips from "alchemy_admin/tooltips"

function init(scope) {
  Alchemy.SelectBox(scope)
  Alchemy.Tooltips(scope)
  Alchemy.Buttons.observe(scope)
  if (!scope) {
    Alchemy.watchForDialogs()
  }
  Alchemy.Hotkeys(scope)
  Alchemy.ListFilter(scope)
  TagsAutocomplete(scope)
}

function initElement($el) {
  Alchemy.ElementDirtyObserver($el)
  init($el && $el.selector)
  Alchemy.ImageLoader($el[0])
  Alchemy.fileEditors(
    $el.find(
      ".ingredient-editor.file, .ingredient-editor.audio, .ingredient-editor.video"
    ).selector
  )
  Alchemy.pictureEditors($el.find(".ingredient-editor.picture").selector)
}

export default {
  init,
  initElement
}
