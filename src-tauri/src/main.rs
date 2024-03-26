// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

// fn create_app_menu() -> Menu{
//   return Menu::new().add_submenu(Submenu::new(
//     title: "App", 
//     menu:Menu::new.add_native_item(MenuItem::Quit),
//   ));
// }
use tauri::{
  api::process::{Command, CommandEvent},
  Manager,
};



fn main() {
  let close = CustomMenuItem::new("close".to_string(), "Close");
  let submenu = Submenu::new("File", Menu::new().add_item(close));
  let menu = Menu::new()
  .add_native_item(MenuItem::Copy)
  .add_item(CustomMenuItem::new("hide", "Hide"))
  .add_submenu(submenu);
  tauri::Builder::default()
  .setup(|app| {
    let window = app.get_window("main").unwrap();
    tauri::async_runtime::spawn(async move {
      let (mut rx, mut child) = Command::new_sidecar("server-x86_64-pc-windows-msvc")
        .expect("failed to setup `app` sidecar")
        .spawn()
        .expect("Failed to spawn packaged node");

      let mut i = 0;
      while let Some(event) = rx.recv().await {
        if let CommandEvent::Stdout(line) = event {
          window
            .emit("message", Some(format!("'{}'", line)))
            .expect("failed to emit event");
          i += 1;
          if i == 4 {
            child.write("message from Rust\n".as_bytes()).unwrap();
            i = 0;
          }
        }
      }
    });

    Ok(())
  }).menu(menu)
    .on_menu_event(|event| {
      match event.menu_item_id() {
        "quit" => {
          std::process::exit(0);
        }
        "close" => {
          event.window().close().unwrap();
        }
        _ => {}
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

