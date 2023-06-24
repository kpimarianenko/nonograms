import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

import config from '@constants/config';

initializeApp(config.firebase);

export const auth = getAuth();

auth.projectConfigManager().updateProjectConfig({
  passwordPolicyConfig: config.fbPasswordPolicy
});
