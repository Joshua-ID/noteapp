      const saveBtn = document.getElementById('saveBtn');
      const deleteBtn = document.getElementById('deleteBtn');
      const noteText = document.getElementById('noteText');
      const notes = document.getElementById('notes');

      function getSavedNotes() {
      const savedNotes = localStorage.getItem('notes');
      return savedNotes ? JSON.parse(savedNotes) : [];
      }

      function saveNote() {
      const text = noteText.value.trim();
      if (!text) return;
      const newNote = { text, date: new Date().toLocaleDateString() };
      const notes = getSavedNotes();
      notes.push(newNote);
      localStorage.setItem('notes', JSON.stringify(notes));
      noteText.value = '';
      showNotes();
      }

      function deleteNotes() {
      localStorage.removeItem('notes');
      showNotes();
      }

      function showNotes() {
      const savedNotes = getSavedNotes();
      notes.innerHTML = '';
      savedNotes.forEach(note => {
          const noteDiv = document.createElement('div');
          noteDiv.className = 'note';
          noteDiv.innerHTML = `<p>${note.text}</p> <div class="note-date">${note.date}</div>`;
          notes.appendChild(noteDiv);
      });
      }

      saveBtn.addEventListener('click', saveNote);
      deleteBtn.addEventListener('click', deleteNotes);
      showNotes();


      