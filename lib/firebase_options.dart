// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyA8Fy7_Qw141NEjp9xaU6nDwU_JXkiBqKg',
    appId: '1:378227364408:web:d46a8668520d43330e4ccd',
    messagingSenderId: '378227364408',
    projectId: 'portfolio-d483f',
    authDomain: 'portfolio-d483f.firebaseapp.com',
    storageBucket: 'portfolio-d483f.appspot.com',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyAIjoDsq2MhlH52MkEpULQzBAn0LEMT4LU',
    appId: '1:378227364408:android:7d6bfd358a335fe80e4ccd',
    messagingSenderId: '378227364408',
    projectId: 'portfolio-d483f',
    storageBucket: 'portfolio-d483f.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyBCpvhWOqQSQd5Zt-hzbdJ7AWzr1sD4O_4',
    appId: '1:378227364408:ios:5ea3ca0a23870e7c0e4ccd',
    messagingSenderId: '378227364408',
    projectId: 'portfolio-d483f',
    storageBucket: 'portfolio-d483f.appspot.com',
    iosBundleId: 'com.example.portfolioKrsxishere',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyBCpvhWOqQSQd5Zt-hzbdJ7AWzr1sD4O_4',
    appId: '1:378227364408:ios:05baf774c6e94f330e4ccd',
    messagingSenderId: '378227364408',
    projectId: 'portfolio-d483f',
    storageBucket: 'portfolio-d483f.appspot.com',
    iosBundleId: 'com.example.portfolioKrsxishere.RunnerTests',
  );
}
